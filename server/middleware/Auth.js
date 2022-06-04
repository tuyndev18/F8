import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
	try {
		const token = req.header('Authorization');
		if (!token) return res.status(401).json({ message: 'Invalid Authentication' });
		jwt.verify(token, process.env.GENERATE_AC_TOKEN, (err, user) => {
			if (err) 
			{
				
				return res.status(401).json({ message: 'Authorization not valid' });
			}
			req.user = user;
			next();
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export default auth;
