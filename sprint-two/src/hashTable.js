

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // change bucketArray in this function to something else
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var bucketArray = [];
    this._storage.set(index, bucketArray);
  } 

  var init = true;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      init = false;
    } 
  }

  if (init) {
    var bucketArray = this._storage.get(index);
    var j = bucketArray.length;

    bucketArray[j] = [];
    bucketArray[j].push(k);
    bucketArray[j].push(v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      return bucketArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      bucketArray[i].splice(0,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


