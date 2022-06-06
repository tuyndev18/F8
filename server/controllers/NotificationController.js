import NotificationsModel from '../models/NotificationModel.js';

const NotificationController = {
  getAll: async (req, res, next) => {
    try {
      const data = await NotificationsModel.find({ userId: req.userId });
      res.json({ data });
    } catch (error) {
      next(error);
    }
  },
};

export default NotificationController;
