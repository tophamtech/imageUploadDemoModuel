const chai = require("chai");
const fs = require("fs");
const chaiHttp = require("chai-http");
const app = require("../server");

var request = require("request");

const { expect } = chai;

var options = {
  method: "GET",
  url: "http://localhost:3001/download/platypus.gif"
};


describe("Test for download route", () => {
  it("should return test image", function(done) {
        request(options, function(error, response, body) {
        let testImage = (fs.readFileSync(`${__dirname}/../test/resources/platypus.gif`)).toString();
        let returnImage = (response.body).toString()
        expect(testImage).to.equal(returnImage) 
        done()
    })
 });
});
