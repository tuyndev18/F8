import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
	{
        content: {type: String},
        userId: {type: mongoose.Types.ObjectId, ref: "Users"},
		followerId: {type: mongoose.Types.ObjectId, ref: "Users"},
		postId: {type: mongoose.Types.ObjectId, ref: "Posts"},
        isWatched: {type: Boolean, default: false}
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
const Posts = mongoose.model('Notifications', notificationSchema);
export default Posts;
