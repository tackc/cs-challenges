
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
  it('should have a null "next" property in final node', function() {
    var current = ll.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.next).to.equal(null);
  });
  it('should insert correctly into middle of list', function() {
    ll.insert(25, 2);
    expect(ll.print()).to.equal("10-20-25-30");
  });
  it('should insert correctly at head of list', function() {
    ll.insert(5, 0);
    expect(ll.print()).to.equal("5-10-20-25-30");
  });
  it('should delete correctly from middle of list', function() {
    ll.delete(2);
    expect(ll.print()).to.equal("5-10-25-30");
  });
  it('should delete correctly from head of list', function() {
    ll.delete(0);
    expect(ll.print()).to.equal("10-25-30");
  });
});
