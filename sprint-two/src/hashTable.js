

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // if same exact key, overwrite with new value
  var index = getIndexBelowMaxForKey(k, this._limit);
  // empty object here
  if (this._storage[index] !== undefined) {
    this._storage[index][k] = v;
  } else {
    // no empty object
    this._storage[index] = {};
    this._storage[index][k] = v;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.includes(k)) {}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
    O(1) or O(n)?
 */


