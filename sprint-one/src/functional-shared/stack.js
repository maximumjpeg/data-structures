var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};

  instance.population = 0;

  _.extend(instance, stackMethods);

  return instance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.population] = value;
  this.population++;
};

stackMethods.pop = function() {
  this.population--;
  var popped = this.storage[this.population];
  delete this.storage[this.population];
  return popped;
};

stackMethods.size = function() {
  if (this.population < 0) {
    return 0;
  } else {
    return this.population;
  }
};



/*


var test = {name: 'rabbit'};

var bunny = Object.create(test);

test.tester = function() {
  console.log(this);
}

test.tester


*/


