const express = require('express');
const downloadController = require('../controllers/downloadController')


const router = express.Router();

// Route for downloading image, image ID passed in URL 
// Example URL: localhost:3001/download/1655552948578-394981520-racoon.gif
router.get('/:imageID', function (req, res, next) {
  downloadController(req, res, next)
})

module.exports = router;