var Set = function() {
  var set = Object.create(setPrototype);
  //set._storage = undefined;
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
  //this[item] = item;
};

setPrototype.contains = function(item) {
    var result = false;
    for (var key in this._storage) {
      if (this._storage[key] === item) {
        result = true;
      }
    }
    return result;
  };
  /*
  var result = false;
  for (var key in this) {
    if (this[key] === item) {
      result = true;
    }
  }
  return result;
};
*/

setPrototype.remove = function(item) {
  delete this._storage;
  //delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
