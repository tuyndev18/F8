import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    content: { type: String },
    userId: { type: String },
    isWatched: { type: Boolean, default: false },
    linkTo: { type: String },
    cover: { type: String, default: "https://res.cloudinary.com/tuyndev/image/upload/v1654309152/default/avatars-000424500066-nchc3n-t500x500_dwtmmw.jpg"},
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Notifications = mongoose.model('Notifications', notificationSchema);
export default Notifications;
