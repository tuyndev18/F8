import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Math.round(Math.random() * 1000));
  },
});

export const upload = multer({ storage: storage });
