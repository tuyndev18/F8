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
    childCount: { type: Number, default: 0 },
    content: { data: { type: String }, code: { type: String } },
    reactions: [{ emoji: String, by: { type: mongoose.Types.ObjectId, ref: 'Users' } }],
    lessonId: { type: String },
    typeReaction: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,  
  },
);

const Comments = mongoose.model('Comments', commentSchema);
export default Comments;
