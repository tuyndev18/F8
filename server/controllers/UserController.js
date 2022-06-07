import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import Notification from '../models/NotificationModel.js';

const userCtrl = {
	getUserInfo: async (req, res, next) => {
		try {
			const { userName } = req.params;
			const data = await UserModel.findOne({ userName }, { email: 0, password: 0 });
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	getUserPosts: async (req, res, next) => {
		try {
			const { userId } = req.params;
			const data = await PostModel.find({ userId }, { content: 0 }).populate({
				path: 'userId',
				select: ['userName', 'avatar'],
			});
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	addPost: async (req, res, next) => {
		try {
			const { title, content, tags, banner, descriptions, heading } = req.body;

			const data = await PostModel.create({
				title,
				content,
				tags,
				userId: req.userId,
				banner,
				descriptions,
				heading
			});
			res.status(201).json({ message: 'successfully added new post' });
		} catch (error) {
			next(error);
		}
	},

	editPost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { title, content, tags, banner } = req.body;
			await PostModel.updateOne({ userId: req.userId, _id: id }, { title, content, tags, banner });
			res.status(201).json({ mess: 'Edit post successfully' });
		} catch (error) {
			next(error);
		}
	},

	deletePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			await PostModel.deleteOne({ userId: req.userId, _id: id });
			res.status(201).json({ mess: 'Delete post successfully' });
		} catch (error) {
			next(error);
		}
	},

	editUser: async (req, res, next) => {
		try {
			const { id, email, password, ...value } = req.body;
			await UserModel.findOneAndUpdate({ _id: req.userId }, value);
			res.status(201).json({ mess: 'update user success!' });
		} catch (error) {
			next(error);
		}
	},

	savePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			await UserModel.updateOne({ _id: req.userId }, { $addToSet: { postsSaved: id } });
			await PostModel.updateOne({ _id: id }, { $addToSet: { saver: req.userId } });
			res.status(201).json({ mess: 'save post!' });
		} catch (error) {
			next(error);
		}
	},

	unsavePost: async (req, res, next) => {
		try {
			const { id } = req.params;

			await UserModel.updateOne({ _id: req.userId }, { $pull: { postsSaved: id } });
			await PostModel.updateOne({ _id: id }, { $pull: { saver: req.userId } });
			res.status(201).json({ mess: 'unsave post!' });
		} catch (error) {
			next(error);
		}
	},
	savedPost: async (req, res, next) => {
		try {
			const data = await UserModel.find({ _id: req.userId }, { postsSaved: 1 }).populate({
				path: 'postsSaved',
				select: ['title', 'updatedAt', 'tags', 'slug'],
				populate: {
					path: 'userId',
					select: ['userName', 'avatar', 'fullName'],
				},
			});
			res.status(201).json(data[0]?.postsSaved);
		} catch (error) {
			next(error);
		}
	},
	followUser: async (req, res, next) => {
		try {
			const { userId } = req.params;
			await UserModel.updateOne({ _id: req.userId }, { $addToSet: { followingUsers: userId } });
			await UserModel.updateOne({ _id: userId }, { $addToSet: { followers: req.userId } });
			res.json({ mess: 'follower Users' });
		} catch (error) {
			next(error);
		}
	},
	unfollowUser: async (req, res, next) => {
		try {
			const { userId } = req.params;
			await UserModel.updateOne({ _id: req.userId }, { $pull: { followingUsers: userId } });
			await UserModel.updateOne({ _id: userId }, { $pull: { followers: req.userId } });
			res.json({ mess: 'unfollow Users' });
		} catch (error) {
			next(error);
		}
	},
	addNotification: async (req, res, next) => {
		try {
			const { type, content } = req.body;
			await Notification.create({type, content});
			res.json({ mess: 'add Notification' });
		} catch (error) {
			next(error);
		}
	},
	activeNotification: async (req, res, next) => {
		try {
			await Notification.create({type, content});
			res.json({ mess: 'unfollow Users' });
		} catch (error) {
			next(error);
		}
	},
};
export default userCtrl;
