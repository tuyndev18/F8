import express from 'express';
const router = express.Router();
import uploadController from '../controllers/UploadController.js';
import {upload} from '../Config/MulterStorage.js';

//Single File
router.post('/single', upload.single('image'), uploadController.single);

//Multiple
router.post('/multiple', upload.any(), uploadController.multiple);

//Resize Image

export default router;
