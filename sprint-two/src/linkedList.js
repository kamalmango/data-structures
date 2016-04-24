var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var node = list.head;

     while (node) {
       if (node.value === target) {
         return true;
       }

       node = node.next;
     }

     return false;
  };
    /*
    if (list.head.value === null) {
      return false;
    } else if (list.head.value === target) {
      return false;
    }else {
      return list.contains(list.head.next);
    }
  };
  */

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    (list.head === null) && (list.head = list.tail);
  };

  list.removeHead = function() {
    var head = list.head.value;
    list.head = list.tail;
    return head;
  };

  list.contains = function(target) {
    var result = false;
    for (var key in list) {
      if (list[key].value === target) {
        result = true;
      }
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
