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
  // does called on tree contain target
  if (this.value === target) {
    // if so, return true
    return true;
  }
  // target not in called on tree
  // does called on tree have children?
  // if so...
  if (this.children.length > 0) {
    // iterate through this.children
    for (var i = 0; i < this.children.length; i++) {
      // if item (tree) has children
      if (this.children[i].children.length > 0) {
        // recurse this fn call
        this.children[i].contains(target);
        // item (tree) has no children
        if (this.children[i].length === 0) {
          // check current tree for target
          if (this.children[i].value === target) {
            return true;
          }
        }
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
