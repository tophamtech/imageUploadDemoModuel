const path = require("path");
const sharp = require("sharp");

function convertFile(inputFile) {
    let typelessName = path.parse(inputFile).name;
  
    sharp(`${__dirname}/../uploads/${inputFile}`).toFile(
      `${__dirname}/../uploads/${typelessName}.png`,
      (err, info) => {
        console.log(err);
      }
    );
  
    sharp(`${__dirname}/../uploads/${inputFile}`).toFile(
      `${__dirname}/../uploads/${typelessName}.gif`,
      (err, info) => {
        console.log(err);
      }
    );

    sharp(`${__dirname}/../uploads/${inputFile}`).toFile(
        `${__dirname}/../uploads/${typelessName}.jpg`,
        (err, info) => {
          console.log(err);
        }
      );
  }


  
  module.exports = convertFile;