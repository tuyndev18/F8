import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'Users',
    },
    postId: String,
    replyToId: {
      type: mongoose.Types.ObjectId,
    },
    content: { type: String, required: true },
    likes: { type: Array, ref: 'Users' },
    lessonId: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Comments = mongoose.model('Comments', commentSchema);
export default Comments;
