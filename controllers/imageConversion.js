const path = require("path");
const sharp = require("sharp");

function convertFile(inputFile) {

    const typelessName = path.parse(inputFile).name;
    const ext = path.parse(inputFile).ext;

    const supportedExt = ['png', 'gif', 'jpg']

    supportedExt.forEach(fileExt => {
      if (fileExt != ext.substr(1,ext.length)) {
        sharp(`${__dirname}/../uploads/${inputFile}`)
        .toFormat(`${fileExt}`)
        .toFile(
          `${__dirname}/../uploads/${typelessName}.${fileExt}`,
          (err, info) => {
          }
        );
      }
    });
    
  }


  
  module.exports = convertFile;