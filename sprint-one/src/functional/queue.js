var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // closure for right and left pointers.
  var left = undefined;
  var right = undefined;

  someInstance.enqueue = function(value) {


    if (Object.keys(storage).length === 0) {
      left = 0;
      right = 0;
      storage[0] = value;
    } else {
      right++;
      storage[right] = value;
    }
  };

  someInstance.dequeue = function() {
    var dequeued = storage[left];
    delete storage[left];
    left++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


