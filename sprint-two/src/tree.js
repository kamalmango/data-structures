var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, base, result) {
  /*
  base = base || this.children;

  for (var i = 0; i < base.length; i++) {
    //(base[i].value === target) && (result = true);
    if (base[i].value === target) {
      return true;
    } else if (base[i].children.length === 0) {
      return false;
    } else {
      return this.contains(target, base[i].children);
    }
  }
  */
  
  
  result = result || false;
  base = base || this.children;
  for (var i = 0; i < base.length; i++) {
    if (base[i].value === target) {
      result = true
    } else {
      result = this.contains(target, base[i].children, result);
    }
  }
  
  return result;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
