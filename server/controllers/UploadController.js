import { cloudinary } from '../Config/UploadCloudinary.js';
import fs from 'fs';

const uploadCtrl = {
  single: async (req, res, next) => {
    try {
      const data = await cloudinary.uploader.upload(req.file.path, {
        folder: 'images',
      });
      fs.unlinkSync(req.file.path);
      res.json({
        data: {
          nameImage: req.file.originalname.split('.')[0],
          urlImage: data.url,
          idImage: data.public_id,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  multiple: async (req, res, next) => {
    try {
      const arrPromise = req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: 'images',
        });
        fs.unlinkSync(file.path);
        return {
          nameImage: file.originalname.split('.')[0],
          urlImage: result.url,
          idImage: result.public_id,
        };
      });
      const data = await Promise.all(arrPromise);
      res.json({ data });
    } catch (error) {
      next(error);
    }
  },
};
export default uploadCtrl;
