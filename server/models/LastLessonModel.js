import mongoose from 'mongoose';

const lastLessonModel = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    lessonId: {
      type: String,
    },
    timeLine: {
        type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const LastLessons = mongoose.model('LastLessons', lastLessonModel);
export default LastLessons;
