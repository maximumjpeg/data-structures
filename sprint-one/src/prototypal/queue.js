var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  return newInstance;
};

var queueMethods = {
  storage: {},
  population: 0,
  left: 0,
  right: 0,
  enqueue: function(value) {
    if (this.population === 0) {
      this.storage[this.left] = value;
      this.population++;
    } else {
      this.storage[this.right + 1] = value;
      this.population++;
      this.right++;
    }
  },
  dequeue: function() {
    var dequeued = this.storage[this.left];
    delete this.storage[this.left];
    this.left++;
    this.population--;
    return dequeued;
  },
  size: function() {
    if (this.population < 0) {
      return 0;
    } else {
      return this.population;
    }
  }
};


