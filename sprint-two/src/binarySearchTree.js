var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTreeMethods);
  //newTree[value] = newTree;
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  return newTree;
};

BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
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

BinarySearchTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }     
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }   
    }
  }
};

BinarySearchTreeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
