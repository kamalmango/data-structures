var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTreeMethods);
  //newTree[value] = newTree;
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  return newTree;
};

BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value, base) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } 
};

BinarySearchTreeMethods.contains = function() {

};

BinarySearchTreeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
