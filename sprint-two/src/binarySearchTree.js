var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, binaryTreeMethods);

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  console.log('called on tree', this);
  // console.log('called on tree left value', this.left);
  // console.log('called on tree right value', this.right);


  // all insert calls after first one...
  // compare insertion value to root value
  // if insertion val is > root val, go right
  if (value > this.value) {
    // if current tree's right is empty, insert here
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      // recursive call on that tree
      this.right.insert(value);
    }
  }
  // if insertion val is < root val, go left
  if (value < this.value) {
    // if current tree's left is empty, insert here
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      // recursive call on that tree
      this.left.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  // check called on node for target
  if (this.value === target) {
    return true;
  }
  if (target > this.value) {
    if (this.right) {
      return this.right.contains(target);
    }
  }
  if (target < this.value) {
    if (this.left) {
      return this.left.contains(target);
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

