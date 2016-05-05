var request = require('supertest');
var should = require('should');
var server = require('./server');


describe('Server', () => {

  it('should require a port to start', () => {
    return server.start({}).should.be.rejectedWith(/port/);
  });

});