import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    type: { type: String },
    title: { type: String },
    participants: { type: Number },
    banner: { type: String },
    chapters: { type: Array },
    level: { type: String },
    description: { type: String },
    detail: { type: Array },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Courses = mongoose.model('Courses', courseSchema);
export default Courses;
