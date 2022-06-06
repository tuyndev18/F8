import express from 'express';
import NotificationController from '../controllers/NotificationController.js';
const router = express.Router();
import auth from '../middleware/Auth.js';
import decodeToken from '../middleware/DecodeToken.js';

//Token Decryption Middleware
router.use(decodeToken);
router.use(auth);

// GET
router.get('/', NotificationController.getAll);

export default router;
