import mongoose from 'mongoose';

const LessonModel = new mongoose.Schema(
  {
    chapterId: {
      type: String,
    },
    time: {
      type: Number,
    },
    title: {
      type: String,
    },
    videoId: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Lessons = mongoose.model('Lessons', LessonModel);
export default Lessons;
