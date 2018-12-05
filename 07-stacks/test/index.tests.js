
var expect = require('chai').expect;

var Stack = require('../stack');

var sPeek = new Stack();
var sPush = new Stack();
var sPop = new Stack();

describe('Stack', function(done) {
  describe('Stack::peek', function(done) {
    it('should return "undefined" when Stack is empty', function() {
      expect(sPeek.peek()).to.equal(undefined);
    });
    it('should return "top" value when one element in Stack', function() {
      sPeek.push(2);
      expect(sPeek.peek()).to.equal(2);
    });
    it('should return "top" value when multiple elements in Stack', function() {
      sPeek.push(4);
      sPeek.push(6);
      expect(sPeek.peek()).to.equal(6);
    });
  })
  describe('Stack::push', function(done) {
    it('should add to "top" side in Stack', function() {
      sPush.push(1);
      sPush.push(3);
      expect(sPush.peek()).to.equal(3);
    });
    it('should not overwrite existing elements', function() {
      sPush.push(5);
      expect(sPush.data).to.eql([1, 3, 5]);
    });
  })
  describe('Stack::pop', function(done) {
    it('should return "undefined" when Stack is empty', function() {
      expect(sPop.pop()).to.equal(undefined);
    });
    it('should remove an element from the Stack', function() {
      sPop.push(1);
      sPop.push(3);
      sPop.push(5);
      sPop.pop();
      expect(sPop.data).to.eql([1, 3]);
    });
    it('should return the top element from the Stack', function() {
      expect(sPop.pop()).to.eql(3);
    });
  })
});
