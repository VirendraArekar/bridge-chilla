const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
  cb(null, Date.now() + '-' + file.originalname);
  }
});

module.exports = {
  storage
}
