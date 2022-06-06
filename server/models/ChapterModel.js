import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Types.ObjectId,
    },
    content: { type: String, required: true },
    lessons: { type: Array },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Chapter = mongoose.model('Chapters', chapterSchema);
export default Chapter;
