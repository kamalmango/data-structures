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
  
  base = base || this.value;
  if (value < base) {
    if (this.left) {
      this.insert(value, base.left);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.insert(value, base.right);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
  
  /*
  if (value < this.value) {
    if (this.left) {
      this.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
  */
  /*
  if (value < this.value) {
    this.left = BinarySearchTree(value);
  } else {
    this.right = BinarySearchTree(value);
  }
  */
};

BinarySearchTreeMethods.contains = function() {

};

BinarySearchTreeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
