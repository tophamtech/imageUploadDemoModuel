const express = require('express')
const config = require('./config.json')
const uploadRoutes = require('./routes/upload')
const downloadRoutes = require('./routes/download')

const app = express()


app.use('/upload', uploadRoutes)
app.use('/download', downloadRoutes)


// Default 404
app.use(function(req, res) {
    res.status(404).json({
      message: "No such route exists"
    })
  });
  


app.listen(config.port)

module.exports = app;