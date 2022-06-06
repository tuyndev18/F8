import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    content: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: 'Users' },
    isWatched: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Notifications = mongoose.model('Notifications', notificationSchema);
export default Notifications;
