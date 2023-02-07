process.env.NODE_ENV = "test";

const chai = require("chai");
const http = require('http');
// const nock = require("nock");
const { expect } = require("chai");
// const got = require("got");
const assert = chai.assert;
// expect = chai.expect;
const request = require('supertest');


const registry = require("../registry");
const server = require("../server");

const packageDependencies = require("../mocking_data/package_dependencies.json");
const listPackages = require("../mocking_data/package_list.json");
const listPackagesAuthors = require("../mocking_data/package_list_author.json");

const rootUrl = "https://api.npms.io/v2";

process.env.NODE_ENV = "test";
// Turn off logging
console.log = function () {};

describe("LibraryBot Tests", function () {
  this.timeout(5000);
  var sample_json_data = {
    'response_url': "http://test123"
  }
  
  // HELPER
  it("check helper", async function() {
    sample_json_data['text'] = 'help';
    x = await server.main(sample_json_data);
    expect(x['text']).to.have.deep.include('Welcome to Library Bot');
  });

  // DEPENENCIES
  it("check dependencies of package - test case 1", async function() {
    // const packageDepMock = nock(rootUrl)
    //   .get("/package/react")
    //   .reply(200, packageDependencies);
    // let parameters = server.parseTextReceived("dependencies for react");
    // let returnValue = await registry.getDependencyList(parameters["package_name"]);
    // console.log(returnValue);
    sample_json_data['text'] = 'dependencies for react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('loose-envify');
  });
  it("check dependencies of package - test case 2", async function() {
    sample_json_data['text'] = 'dependency react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('loose-envify');
  });  
  it("check dependencies of package - test case 3", async function() {
    sample_json_data['text'] = 'dependency package react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('loose-envify');
  });
  it("check dependencies of package - test case 4", async function() {
    sample_json_data['text'] = 'dependency packages react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('loose-envify');
  });  

  // SIMPLE LIST 
  it("simple list packages - test case 1", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'packages for machine learning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("simple list packages - test case 2", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'packages machine learning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("simple list packages - test case 3", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'package machine learning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("simple list packages - test case 4", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'package for machine learning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });

  // POPULARITY LIST
  it("list packages by popularity - test case 1", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'package for machine learning sorted by popularity';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("list packages by popularity - test case 2", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'packages machine learning sorted by popularity';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("list packages by popularity - test case 3", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'package for machine learning popularity';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });
  it("list packages by popularity - test case 4", async function() {
    // const listPackageMock = nock(rootUrl)
    //   .get("/search?q=machine+learning")
    //   .reply(200, listPackages);
    sample_json_data['text'] = 'package machine learning popularity';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('gatsby');
  });

  // REPORT BUG
  it("report bug for package - test case 1", async function() {
    // const packageDepMock = nock(rootUrl)
    //   .get("/package/react")
    //   .reply(200, packageDependencies);
    // let parameters = server.parseTextReceived("report bug for react");
    // let returnValue = await registry.getReportBugURL(parameters["package_name"]);
    // console.log(returnValue);
    sample_json_data['text'] = 'report bug for react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });
  it("check that bug reporting url is correctly returned - input 2", async function() {
    sample_json_data['text'] = 'report bug react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 3", async function() {
    sample_json_data['text'] = 'report issue for react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 4", async function() {
    sample_json_data['text'] = 'report issue react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 5", async function() {
    sample_json_data['text'] = 'issue bug react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 6", async function() {
    sample_json_data['text'] = 'bug react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 7", async function() {
    sample_json_data['text'] = 'issue report react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 8", async function() {
    sample_json_data['text'] = 'bug report react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 9", async function() {
    sample_json_data['text'] = 'report react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 10", async function() {
    sample_json_data['text'] = 'report bug react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });

  it("check that bug reporting url is correctly returned - input 11", async function() {
    sample_json_data['text'] = 'issue react';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.equal('Here is URL to report the bug -> https://github.com/facebook/react/issues');
  });
  
  // TODO: Fix this
  it("list packages for author - test case 1", async function() {
    // const query = "/search?q=sass+author:%22david%20manning%22"
    // const listPackageMock = nock(rootUrl)
    //   .get(query)
    //   .reply(200, listPackagesAuthors);
    sample_json_data['text'] = 'packages for sass by "David Manning"';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    // let returnValue = await registry.getListOfPackagesForAnAuthor("packages for sass by David Manning");
    // expect(returnValue).to.equal("sass-v documentation -> https://www.npmjs.com/package/sass-v");
    expect(returnValue).to.have.deep.include('sass');
  });

  it("list packages for author - test case 2", async function() {
    sample_json_data['text'] = 'packages for sass by David Manning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('sass');
  });
  it("list packages for author - test case 3", async function() {
    sample_json_data['text'] = 'package for sass by David Manning';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('sass');
  });
  it("list packages for author - test case 4", async function() {
    sample_json_data['text'] = 'package for sass by "David Manning"';
    x = await server.main(sample_json_data);
    returnValue = x['text'];
    expect(returnValue).to.have.deep.include('sass');
  });

});

describe("Main server/utility functions tests", function () {
  before(function () {
    server.server.listen(8000);
  });

  after(function () {
    server.server.close();
  });
  it('should return 200 for GET request', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
  it('should respond with redirect on post', function(done) {
    request(server.server)
      .post('/')
      .send({'data': 'nullaldk as'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {});
      done();
  });
  it('testing post requests with invalid input', function(done) {
    request(server.server)
        .post('/')
        .send()
        .end((err, res) => {
              console.log(res.text);
              assert(res.status == 200);
              expect(res.text).to.have.deep.include('Incorrect input');
          done();
        });
  });

});