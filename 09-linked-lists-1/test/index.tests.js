
var expect = require('chai').expect;

var ListNode = require('../listnode');
var LinkedList = require('../linkedlist');

var ll = new LinkedList();

describe('Linked List', function(done) {
  it('should be empty after construction', function() {
    expect(ll.print()).to.equal("empty");
  });
  it('should have a null head after construction', function() {
    expect(ll.head).to.equal(null);
  });
  it('should have a node in the "head" after add()', function() {
    ll.add(10);
    expect(ll.head.data).to.equal(10);
  });
  it('should print all nodes', function() {
    ll.add(20);
    ll.add(30);
    expect(ll.print()).to.equal("10-20-30");
  });
  it('final node should have a null "next" property', function() {
    var current = ll.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.next).to.equal(null);
  });
});
