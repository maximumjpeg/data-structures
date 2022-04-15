var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.population = 0;
  this.left = 0;
  this.right = 0;
};

Queue.prototype.enqueue = function(value) {
  if (this.population === 0) {
    this.storage[this.left] = value;
    this.population++;
  } else {
    this.storage[this.right + 1] = value;
    this.population++;
    this.right++;
  }
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.left];
  delete this.storage[this.left];
  this.left++;
  this.population--;
  return dequeued;
};

Queue.prototype.size = function() {
  if (this.population < 0) {
    return 0;
  } else {
    return this.population;
  }
};

var instanced = new Queue();


