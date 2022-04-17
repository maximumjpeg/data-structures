var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // check called on node for target
  if (this.value === target) {
    return true;
  }
  // if called on node HAS children
  if (this.children.length > 0) {
    // iterate through children
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      // If child node contains target
      if (child.contains(target)) {
        // return true
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
  O(n)
 */
