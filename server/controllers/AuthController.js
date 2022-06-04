import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersModal from '../models/UserModel.js';
import { ArraySecret, GenerateOtp, GenerateSecret, VerifyOtp } from '../Config/OtpConfig.js';
import { SendMail } from '../Utils/SendMail.js';

let arrSecret = [];
let refreshTokens = [];

const authCtrl = {
  register: async (req, res, next) => {
    try {
      const { userName, email, password } = req.body;
      const user = await UsersModal.findOne({ email: email });
      if (user) {
        return res.status(400).json({ message: 'This email already exists' });
      }
      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be greater equal 6' });
      }
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const newUser = await UsersModal.create({
        userName: userName,
        email: email,
        password: passwordHash,
      });
      res.json({ message: 'Register success', newUser });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UsersModal.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "This email doesn't exists" });

      //check decrypt password with non-decrypt
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });
      //check all condition success , create ac_token, rf_token and send back to client
      const access_token = authCtrl.generateAccessToken(user._id);
      const refresh_token = authCtrl.generateRefreshToken(user._id);
      refreshTokens.push(refresh_token);
      //attach rf_token to cookie.
      res.cookie('refresh_token', refresh_token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
      });
      const { password: passwordInDoc, ...rest } = user._doc;
      res.status(200).json({ ...rest, access_token });
    } catch (error) {
      next(error);
    }
  },
  logOut: async (req, res, next) => {
    //Clear cookies when user logs out
    const access_token = req.headers.authorization;
    const refresh_token = req.cookies.refresh_token;
    try {
      if (access_token) {
        jwt.verify(access_token, process.env.GENERATE_AC_TOKEN, (err, user) => {
          if (err) {
            return res.status(401).json('Token is not valid!');
          }
          refreshTokens = refreshTokens.filter((token) => token !== refresh_token);
          res.clearCookie('refresh_token');
          return res.status(200).json('Logged out successfully!');
        });
      } else {
        return res.status(401).json("You're not authenticated");
      }
    } catch (error) {
      next(error);
    }
  },
  generateAccessToken: (userId) => {
    return jwt.sign(
      {
        userId: userId,
      },
      process.env.GENERATE_AC_TOKEN,
      { expiresIn: '10s' },
    );
  },
  generateRefreshToken: (userId) => {
    return jwt.sign(
      {
        userId: userId,
      },
      process.env.GENERATE_RF_TOKEN,
      { expiresIn: '5m' },
    );
  },
  requestRefreshToken: async (req, res) => {
    //Take refresh token from user
    const refresh_token = req.cookies.refresh_token;
    //Send error if token is not valid
    if (!refresh_token) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refresh_token)) {
      return res.status(403).json('Refresh token is not valid');
    }
    jwt.verify(refresh_token, process.env.GENERATE_RF_TOKEN, (err, user) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      //create new access token, refresh token and send to user
      refreshTokens = refreshTokens.filter((token) => token !== refresh_token);
      const newAccessToken = authCtrl.generateAccessToken(user.userId);
      const newRefreshToken = authCtrl.generateRefreshToken(user.userId);

      refreshTokens.push(newRefreshToken);
      res.cookie('refresh_token', newRefreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 5),
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
      });
      return res.status(200).json({
        access_token: newAccessToken,
      });
    });
  },
  sendMail: async (req, res, next) => {
    try {
      const { email } = req.body;
      const { userName } = (await Users.findOne({ email })) || { userName: null };
      const secret = GenerateSecret();
      const otp = GenerateOtp(secret);
      const mang = ArraySecret(email, secret, otp, arrSecret);
      arrSecret = mang;
      await SendMail(email, userName, otp);
      return res.json({ err: 'Check the verification code in the email' });
    } catch (error) {
      next(error);
    }
  },
  confirmOtp: async (req, res, next) => {
    try {
      const { otp } = req.body;
      const info = arrSecret.find((val) => val.otp === otp);
      const isCheck = VerifyOtp(otp, info?.secret);
      if (!isCheck) return res.json({ err: 'your otp code has expired !' });
      const token = jwt.sign({ email: info.email, type: 'reset' }, process.env.TOKEN_SECRET, {
        expiresIn: '12h',
      });
      res.cookie('token', token, {
        maxAge: 12 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      });
      return res.json({ mess: 'otp code verification successful!' });
    } catch (error) {
      next(error);
    }
  },
  newPassword: async (req, res, next) => {
    try {
      const { newPass } = req.body;
      const { token } = req.cookies;
      const isCheck = jwt.verify(token, process.env.TOKEN_SECRET);
      const data = jwt.decode(token, process.env.TOKEN_SECRET);
      if (!isCheck) res.json({ err: 'Token has expired' });
      const hashPass = await bcrypt.hash(newPass, 10);
      await Users.findOneAndUpdate({ email: data.email }, { password: hashPass });
      return res.json({ mess: 'Change password successfully !' });
    } catch (error) {
      next(error);
    }
  },
};
export default authCtrl;
