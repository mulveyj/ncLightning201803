var expect = require('chai').expect;

var {changeCalculator} = require('../changeCalculator');

describe('changeCalculator()', function () {
  'use strict';

  it('exists', function () {
    expect(changeCalculator).to.be.a('function');
  });

  it('accepts one argument', function () {
    expect(changeCalculator.length).to.equal(1);
  });
  it('returns undefined if passed NaN', function () {
    expect(changeCalculator('dog')).to.equal(undefined);
    expect(changeCalculator([3,4])).to.equal(undefined);
    expect(changeCalculator(false)).to.equal(undefined);
    expect(changeCalculator(null)).to.equal(undefined);
    expect(changeCalculator({a:1, b:2})).to.equal(undefined);
  });
  it('returns undefined if passed a negative number or a float', function () {
    expect(changeCalculator(-23)).to.equal(undefined);
    expect(changeCalculator(72.75)).to.equal(undefined);
  });

  it('returns an object', function () {
    expect(changeCalculator(56)).to.be.an('object');
  });

  it('returns an empty object if passed zero', function () {
    expect(changeCalculator(0)).to.eql({});
  });

  it('returns an object with one element if an exact denomination is passed', function () {
    expect(changeCalculator(1)).to.eql({'1':1});
    expect(changeCalculator(10)).to.eql({'10':1});
  });

  it('correctly calculates change for valid input', function () {
    expect().to.equal()
  });

});
