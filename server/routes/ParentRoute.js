import express from 'express';
const Router = express.Router();
import authRoute from './AuthRoute.js';
import uploadRoute from './UploadRoute.js';
import postRoute from './PostRoute.js';
import userRoute from './UserRoute.js';
// import tagRoute from './TagRoute.js'
export default function ParentRoute(app) {
	Router.use('/auth', authRoute);
	Router.use('/users', userRoute);
	Router.use('/posts', postRoute);
	// Router.use('/tags', tagRoute);
	Router.use('/uploads', uploadRoute);
	app.use('/api/v1', Router);
}
