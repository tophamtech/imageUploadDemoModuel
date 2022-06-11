const multer  = require('multer');
const path = require('path')
const config = require('../config.json')


function validateType(file){
    const mimeArr = ((file.mimetype).split('/'))
    const mimeType = mimeArr[0];
    const imageType = mimeArr[1];
    if (mimeType != 'image') {
      return false;
    } else return true;
  }
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      validateType(file)
      let customFileName = (Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' +file.originalname)
      cb(null, customFileName)
    }
  })
  
  const upload = multer({ storage: storage }).single('imagefile')

  function uploadEntry(req,res,next){
upload(req, res, function(err){
    let uploadedFilename = req.file.filename
    if (!validateType(req.file)) {
      res.status(400).send('Invalid file type')
    } else {
      res.send(`File received, your unique retrival url is: ${config.baseurl}/${config.downloadpath}/${uploadedFilename}`)
    }
  })
}


  module.exports = uploadEntry;