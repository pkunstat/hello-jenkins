var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello jenkins', function(done) {
<<<<<<< HEAD
    request(app).get('/').expect('hello jenkins KUK', done);
=======
    request(app).get('/').expect('hello jenkins 2', done);
>>>>>>> c0f39f90190f53bfa16313c19c062a5d64243958
  });
});
