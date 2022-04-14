var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};

  instance.population = 0;

  instance.left = 0;
  instance.right = 0;

  _.extend(instance, queueMethods);

  return instance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.population] = value;
  this.population++;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.left];
  delete this.storage[this.left];
  this.left++;
  this.population--;
  return popped;
};

queueMethods.size = function() {
  if (this.population < 0) {
    return 0;
  } else {
    return this.population;
  }
};

