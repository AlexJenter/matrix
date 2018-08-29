var expect = require('chai').expect;
var Matrix = require('./index');

describe('Vector', function() {
  describe('add', function() {
    it('correctly adds two vectors', function() {
      var a =   [1, 0, 0]
      var b =   [0, 1, 0]
      var res = [1, 1, 0]
      expect(Matrix.add(a, b)).to.deep.equal(res)
    })
    
  })
  describe('scale', function() {
    it('correctly scales a vector by a scalar', function() {
      var v =   [1, 2, 3]
      var f = 2
      var res = [2, 4, 6]
      expect(Matrix.scale(v, f)).to.deep.equal(res)
    })
  })
})