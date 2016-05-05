'use strict';

var should = require('should');
var parser = require('./parser');

describe('Parser', () => {

  it('should throw with no input', () => {

    (() => { parser.parse(); }).should.throw(/[Ii]nput/);

  });

  it('should create a habit for each line', () => {

    let input = `Don't smoke
      Go for a 5k run each week
      Do the dishes every day`;

    let habits = parser.parse(input);

    habits.length.should.equal(3);

  });

  it('should filter empty lines', () => {

    let input = `
      Don't smoke
      

      Go for a 5k run each week
      Do the dishes every day`;

    let habits = parser.parse(input);

    habits.length.should.equal(3);

  });

});