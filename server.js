
const uploadController = require('./controllers/uploadController')
const imageConversion = require('./controllers/imageConversion')
const downloadController = require('./controllers/downloadController')


exports.uploader = uploadController
exports.imageConversion = imageConversion
exports.downloader = downloadController