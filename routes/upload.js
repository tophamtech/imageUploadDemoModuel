const express = require('express');
const uploadController = require('../controllers/uploadController')

const router = express.Router();



router.post('/newimage', function (req, res, next) {
    uploadController(req,res,next)    
  })

module.exports = router;