const chai = require("chai");
const fs = require("fs");
const chaiHttp = require("chai-http");
const app = require("../server");

var request = require("request");

const { expect } = chai;

chai.use(chaiHttp);

const imageStream = fs.createReadStream(`${__dirname}/../test/resources/platypus.gif`)

var options = {
  method: "POST",
  url: "http://localhost:3001/upload/newimage",
  headers: {
    "postman-token": "46f199b6-443b-d2a3-69c4-0853b287107b",
    "cache-control": "no-cache",
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
  },
  formData: {
    imagefile: {
      value: imageStream,
      options: { filename: "platypus.gif", contentType: null }
    }
  }
};

function cleanup(fileID) {
  let deleteArr = ['.png','.jpg','.gif']
  deleteArr.forEach(ext => {
    fs.unlink(`${__dirname}/../uploads/${fileID}${ext}`, (err) => {
      if (err) {}
    })
  });  
}

describe("Test for upload route only", () => {

  it("should return 200 and upload image", function(done) {
        request(options, function(error, response, body) {
        bodyResult = body;
        let fileID = (JSON.parse(body)).fileID
        expect(bodyResult).to.include("upload\":\"ok\"") 
        // cleanup(fileID)
        done()
    })
 });
});

