
var expect = require('chai').expect;

var Queue = require('../queue');

var qPeek = new Queue();
var qEnqueue = new Queue();
var qDequeue = new Queue();

describe('Queue', function(done) {
  describe('Queue::peek', function(done) {
    it('should return "undefined" when Queue is empty', function() {
      expect(qPeek.peek()).to.equal(undefined);
    });
    it('should return "front" value when one element in Queue', function() {
      qPeek.enqueue(2);
      expect(qPeek.peek()).to.equal(2);
    });
    it('should return "front" value when multiple elements in Queue', function() {
      qPeek.enqueue(4);
      qPeek.enqueue(6);
      expect(qPeek.peek()).to.equal(2);
    });
  })
  describe('Queue::enqueue', function(done) {
    it('should add to "front" side in Queue', function() {
      qEnqueue.enqueue(1);
      qEnqueue.enqueue(3);
      expect(qEnqueue.peek()).to.equal(1);
    });
    it('should not overwrite existing elements', function() {
      qEnqueue.enqueue(5);
      expect(qEnqueue.data).to.eql([5, 3, 1]);
    });
  })
  describe('Queue::dequeue', function(done) {
    it('should return "undefined" when Queue is empty', function() {
      expect(qDequeue.dequeue()).to.equal(undefined);
    });
    it('should remove an element from the Queue', function() {
      qDequeue.enqueue(1);
      qDequeue.enqueue(3);
      qDequeue.enqueue(5);
      qDequeue.dequeue();
      expect(qDequeue.data).to.eql([5, 3]);
    });
    it('should return the top element from the Queue', function() {
      expect(qDequeue.dequeue()).to.eql(3);
    });
  })
});
