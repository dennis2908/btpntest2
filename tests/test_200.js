"use strict";

var chai = require('chai');
var chaiHttp = require('chai-http');
let app = require('../app');

var expect = chai.expect;

chai.use(chaiHttp);

it('succeeds silently!', function() {   // = check if can on main page returns 200 status code
  chai.request('http://localhost:3000')
  .get('/')
  .end(function(err, res) {
    expect(res).to.have.status(200); 
	expect(res).to.be.html;
	expect(res).to.be.a('object');
	expect(res).to.have.property('status').eql(200);
	// <= Test completes before this runs
  });
  
});
it('succeeds silently!', function() {   // <= check if can send data straightly, but it will fails because is not allowed 403.
  chai.request('http://localhost:3000')
  .post('https://simple-contact-crud.herokuapp.com/contact')
                .send({'firstName':'Mawar','lastName':'Bunga','age':20,'photo':'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550'})
                .end((err, res) => {
                    expect(res).to.have.status(403); 
                    expect(res).to.have.property('status').eql(403);
                });
  
});