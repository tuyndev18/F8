import mongoose from 'mongoose';

const noteModel = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Types.ObjectId,
    },
    userId: {
      type: mongoose.Types.ObjectId,
    },
    chapterId: {
      type: mongoose.Types.ObjectId,
    },
    timeline: {
      type: Number,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Notes = mongoose.model('Notes', noteModel);
export default Notes;
