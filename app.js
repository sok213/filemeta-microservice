const express = require('express'),
  multer      = require('multer'),
  path        = require('path'),
  port        = process.env.PORT || 3000,
  app         = express();
  
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const upload = multer({storage: storage}).single('upFile');

app.use('/', express.static('assets'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.send(
      {
        size: req.file.size,
        fileName: req.file.originalname
      }
    );
    console.log('Photo Uploaded');
  });
});
  
app.listen(port, function() {
  console.log(`Listening on port: ${ port }...`);
});