var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.population = 0;

  list.addToTail = function(value) {
  // If population is zero
    if (list.population === 0) {
      // Add first node
      list[1] = Node(value);
      // update list.head
      list.head = list[1];
      // update list.tail
      list.tail = list[1];
    // Else
    } else {
      // Add next node
      list[list.population + 1] = Node(value);
      // update list.tail
      list.tail = list[list.population + 1];
      // update previous node's nextNode reference
      list[list.population].next = list[list.population + 1];
    }
    // Increment population +1
    list.population++;
  };

  list.removeHead = function() {
    // If population is 2 or more
    if (list.population >= 2) {
      // capture head node's value as return variable
      var removedVal = list.head.value;
      // update list.head to deleted head nodes nextNode

    // delete head node
    // return the return variable
    }
  // If population is 1
    // capture solo nodes value as return variable
    // delete solo node
    // update head to null
    // update tail to null
    // return the return variable
  // decrement population by 1 (might have to population check that)
  };

  list.contains = function(target) {
  // iterate through list
    // for each item
    // check value for === to target
    // if equivalency => return true
    // if !equivalency => false

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
        Our guess is O(n)
 */