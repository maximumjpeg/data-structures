var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (Object.keys(storage).length === 0) {
      console.log('empty storage');
      storage[0] = value;
    } else {
      storage[Object.keys(storage).length] = value;
      console.log('storage was not empty');
    }

  };

  someInstance.pop = function() {
    var popped = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
