import commentModel from '../models/commentModel.js';

const commentController = {
	addComment: async (req, res, next) => {
		try {
			const {postId} = req.params
			const {content} = req.body
			const data = await commentModel.create({
				content,
				userId: req.userId,
				postId
			});
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	editComment: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { content } = req.body;
			const data = await commentModel.findOneAndUpdate({ _id: id, userId: req.userId }, {content});
			if(!data) throw(new Error("No comments exist")) 
			res.status(201).json({ mess: 'update comment success!' });
		} catch (error) {
			next(error);
		}
	},
	deleteComment: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await commentModel.findOneAndDelete({ _id: id, userId: req.userId });
			const data2 = await commentModel.deleteMany({replyToId: id});
			if(!data) throw(new Error("No comments exist"));
			res.status(200).json({ mess: 'delete comment success!' });
		} catch (error) {
			next(error);
		}
	},
};

module.exports = commentController;
