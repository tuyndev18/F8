import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authController from '../controllers/AuthController.js';
import "../Config/OtpConfig.js";
const router = express.Router();
import cors from 'cors'

router.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			secure: false,
		},
	}),
);

router.use(passport.session());
router.use(passport.initialize());

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
	res.redirect('http://localhost:5000/api/v1/auth/data');
}),
	router.get('/data', (req, res) => {
		res.json(req.user);
	});
router.get('/logout', (req, res) => {
	req.logout();
	res.json('logout thành công');
});

//Register Router
router.post('/register', authController.register);

//Login Router
router.post('/password/require', authController.sendMail);
router.post('/password/confirm', authController.confirmOtp);
router.post('/password/new', authController.newPassword);
router.post('/login', authController.login);
router.post('/refresh', authController.requestRefreshToken);
router.post('/log_out', authController.logOut);








export default router;
