var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this. population = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.population] = value;
  this.population++;
};
Stack.prototype.pop = function() {
  var popped = this.storage[this.population - 1];
  delete this.storage[this.population - 1];
  this.population--;
  return popped;
};
Stack.prototype.size = function() {
  if (this.population < 0) {
    return 0;
  } else {
    return this.population;
  }
};

var instance = new Stack();