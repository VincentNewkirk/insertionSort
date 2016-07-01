var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var insertionSort = require('./../js/script.js');

describe('Insertion Sort', function () {
  it('Should exist', function () {
    expect(insertionSort).to.be.a('function');
  });
  it('Should be a function', function () {
    expect(insertionSort).to.be.a('function');
  });
  it('Should equal', function () {
    var testArr = [1,3,5,2,4,6,8,7,9];
    expect(insertionSort(testArr)).to.deep.equal([1,2,3,4,5,6,7,8,9]);
  });
  describe('The real challenge', function(){
    it('Should return', function () {
      var arr2 = [9,5,3,1,7,5,8,8,3,2,1];
      expect(insertionSort(arr2)).to.deep.equal([1,1,2,3,3,5,5,7,8,8,9]);
    });
  });
});