// This object houses all the friends _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = function() {

  this._nodes = {};
  this._data = Parse.readAll();
};

// Add a node to the Friends, passing in the node's value.
Friends.prototype.addNode = function(node) {

  this._nodes[node] = this._nodes[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the Friends.
Friends.prototype.contains = function(node) {

  return !!this._nodes[node];
};

// Removes a node from the Friends.
Friends.prototype.removeNode = function(node) {

  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Friends.prototype.areFriends = function(fromNode, toNode) {

  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
};

// Connects two nodes in a Friends by adding an edge between them.
Friends.prototype.addFriend = function(fromNode, toNode) {

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Add an edge to each node pointing to the other
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
  };

// Remove an edge between any two specified friends
Friends.prototype.removeFriend = function(fromNode, toNode) {

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Remove edges from each node's edge list
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
  };

// Pass in a callback which will be executed on each node of the Friends.
Friends.prototype.forEachNode = function(cb) {

  for (var node in this._nodes) {
    cb(node);
  }

Friends.prototype.toggleStatus = function(fromNode, toNode) {
  if (this.areFriends) {
    this.removeFriend(fromNode, toNode);
  } else {
    this.addFriend(fromNode, toNode);
  }
}
};





// original function
// var Friendss = function() {
//   // TODO: Define how you want to store your list of friendss.

//   /*
//   {
//     person1: [person2, person3, person4],
//     person2: [person1, person3],
//     person3: [person2, person1],
//     person4: [person1]
//   }
//   */

//   _data: null,

//   // function(person1, person2) {
//     // return a boolean
//   // }

//   // TODO: Define methods which allow you to add, toggle,
//   // and check the friendsship status of other users.

// };
