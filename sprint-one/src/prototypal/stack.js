var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  return newInstance;
};

var stackMethods = {
  storage: {},
  population: 0,
  push: function(value) {
    this.storage[this.population] = value;
    this.population++;
  },
  pop: function() {
    var popped = this.storage[this.population - 1];
    delete this.storage[this.population - 1];
    this.population--;
    return popped;
  },
  size: function() {
    if (this.population < 0) {
      return 0;
    } else {
      return this.population;
    }
  }
};


