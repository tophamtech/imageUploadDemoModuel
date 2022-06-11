const chai = require("chai");
const fs = require("fs");
const chaiHttp = require("chai-http");
const app = require("../server");

var request = require("request");

const { expect } = chai;

chai.use(chaiHttp);

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
      value: 'fs.createReadStream("platypus.jpg")',
      options: { filename: "platypus.jpg", contentType: null }
    }
  }
};


describe("Test for upload route", () => {
  it("should return 200 and upload image", function(done) {
        request(options, function(error, response, body) {
        console.log(body)
        bodyResult = body;
        expect(bodyResult).to.include("upload\":\"ok\"") 
        done()
    })
 });
});

// describe('Test for upload route', () => {
//     it('should return 200 and upload image', async() => {
//         console.log(__dirname)
//         const res = await chai.request(app)
//             .post('/upload/newimage')
//             .set('content-type', 'multipart/form-data')
//             .attach('imagefile', fs.readFileSync(`${__dirname}/resources/bear.jpg`))
//             expect(res.status).to.equal(201);
//     })
// })

// var expect  = require('chai').expect;
// var request = require('request');

// it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });
