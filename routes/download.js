const express = require('express');
const path = require('path')


const router = express.Router();


router.get('/:imageID', function (req, res, next) {
  const file = `${__dirname}/../uploads/${req.params.imageID}`;
  res.download(file)
})

module.exports = router;