

// {
//     6: {
//         neighbors: [4],
//     },
//     4: {
//         neighbors: [6],
//     },
//     3: {
//         neighbors: [4, 2],
//     }
// }


// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a node object
  // add node neighbors property
  // store node in graph object's storage object
  this.storage[node] = {neighbors: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Return boolean for storage[node] is true
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Delete references to deleted node in neighbor arrays of each neighbor
  var neighborArr = this.storage[node].neighbors;
  for (var i = 0; i < neighborArr.length; i++) {
    // console.log('neighbor arr ', neighborArr);
    // console.log('current node ', this.storage[node]);
    // console.log('neighbor node ', this.storage[neighborArr[i]]);
    // console.log('current neighbor in list ', neighborArr[i]);
    // console.log('indexOf node in neighbors neighbor array: ', this.storage[neighborArr[i]].neighbors.indexOf(node));
    var indexForSpliceCall = this.storage[neighborArr[i]].neighbors.indexOf(node);
    this.storage[neighborArr[i]].neighbors.splice(indexForSpliceCall, 1);
  }
  // Delete node object
  // console.log(this.storage[node]);
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  // console.log('fromNode', fromNode);
  // console.log('fromNode\'s neighbors:', this.storage[fromNode].neighbors);
  // console.log('fromNode includes toNode as a neighbor', this.storage[fromNode].neighbors.includes(toNode));
  // console.log('toNode', toNode);
  // console.log('toNode\'s neighbors:', this.storage[toNode].neighbors);
  // console.log('toNode includes fromNode as a neighbor', this.storage[toNode].neighbors.includes(fromNode));
  // if fromNode & toNode have each other as neighbors => true: else => false
  if (this.storage[fromNode].neighbors.includes(toNode) && this.storage[toNode].neighbors.includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // update -> fromNode[neighbors] = toNode
  this.storage[fromNode].neighbors.push(Number(toNode));
  // console.log('adding edge between ', fromNode, ' and ', toNode);
  // console.log('fromNode is storing ', toNode);
  // console.log('current state of fromNode:');
  // console.table(this.storage[fromNode]);
  // update -> toNode[neighbors] = fromNode
  this.storage[toNode].neighbors.push(Number(fromNode));
  // console.log('toNode is storing ', fromNode);
  // console.log('current state of toNode:');
  // console.table(this.storage[toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Delete toNode from fromNode[neighbors]
  var fromNodeNeighbors = this.storage[fromNode].neighbors;
  fromNodeNeighbors.splice(fromNodeNeighbors[toNode], 1);
  // Delete fromNode from toNode[neighbors]
  var toNodeNeighbors = this.storage[toNode].neighbors;
  toNodeNeighbors.splice(fromNodeNeighbors[toNode], 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for in loop, iterate through graph object's storage object
  for (var node in this.storage) {
    // console.log('current node\'s value ', node);
    // call cb fn on each node object
    cb(node);
  }
  // testing other iteration patterns to try and debug

};

/*
 * Complexity: What is the time complexity of the above functions?
    O(n)
 */


