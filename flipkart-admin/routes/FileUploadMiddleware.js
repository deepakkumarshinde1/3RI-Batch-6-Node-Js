const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.originalname.substring(file.originalname.lastIndexOf("."));
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

module.exports.upload = multer({ storage: storage });
