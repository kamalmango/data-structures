var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var dequeued = this[0];
  delete this[0];
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i+1];
  }
  this.length--;
  return dequeued;
};

queueMethods.size = function() {
  return this.length >= 0 ? this.length : 0;
};


