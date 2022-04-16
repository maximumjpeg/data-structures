var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.population = 0;

  list.addToTail = function(value) {
  // If population is zero
    if (!list.head) {
      // Add first node
      list[1] = Node(value);
      // update list.head
      list.head = list[1];
      // update list.tail
      list.tail = list[1];
    // Else
    } else {
      // Add another node
      list[list.population + 1] = Node(value);
      // update previous node's nextNode reference
      list[list.population].next = list[list.population + 1];
      // update list.tail
      list.tail = list[list.population + 1];
    }
    // Increment population +1
    list.population++;
    // console.log('population: ', list.population);
  };

  list.removeHead = function() {
    // If population is 2 or more
    if (list.population >= 2) {
      // capture head node's value as return variable
      var removedVal = list.head.value;
      // update list.head to deleted head nodes nextNode
      list.head = list.head.next;
      // delete head node
      delete list[1];
      // return the return variable
      return removedVal;
    }
    // If population is 1
    if (list.population === 1) {
      // capture solo nodes value as return variable
      var removedVal = list[1].value;
      // delete solo node
      delete list[1];
      // update head to null
      list.head = null;
      // update tail to null
      list.tail = null;
      // return the return variable
      return removedVal;
    }
    // decrement population by 1 (might have to population check that)
    list.population--;
  };

  list.contains = function(target) {
    // iterate through list
    for (var key in list) {
      // check value for === to target
      var isFound = false;
      if (list[key].value === target) {
        // if equivalency => return true
        isFound = true;
        return isFound;
      }
    }
    if (!isFound) {
      return isFound;
    }
    // return false;
  };
  // return linked list!
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