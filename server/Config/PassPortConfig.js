import passport from 'passport';
import GitHub from 'passport-github2';
const GitHubStrategy = GitHub.Strategy;

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GIT_ID,
			clientSecret: process.env.GIT_SECRET,
			callbackURL: 'http://localhost:5000/api/v1/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		},
	),
);

passport.serializeUser((user, done) => {
	return done(null, user);
});

passport.deserializeUser((user, done) => {
	return done(null, user);
});
