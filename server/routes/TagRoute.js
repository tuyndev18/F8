import express from 'express';
import tagCtrl from '../controllers/TagController.js';
const router = express.Router();



router.get('/' , tagCtrl.getAllTag);

export default router;
