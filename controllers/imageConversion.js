const path = require("path");
const sharp = require("sharp");

// File type conversion function
function convertFile(inputFile) {
    const typelessName = path.parse(inputFile).name;
    const ext = path.parse(inputFile).ext;

    // Update this array to convert to more file types. Support types are here: https://sharp.pixelplumbing.com/api-output
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