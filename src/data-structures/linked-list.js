function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.first = null;
  this.last = null;
}

LinkedList.prototype.push = function (data) {
  var node = new Node(data);
  if (this.first === null) {
    this.first = this.last = node;
  } else {
    var temp = this.last;
    this.last = node;
    node.prev = temp;
    temp.next = node;
  }
};

LinkedList.prototype.unshift = function (data) {
  var node = new Node(data);
  if (this.first === null) {
    this.first = this.last = node;
  } else {
    var temp = this.first;
    this.first = node;
    node.next = temp;
    temp.prev = node;
  }
};

LinkedList.prototype.inorder = function (cb) {
  var temp = this.first;
  while (temp) {
    cb(temp);
    temp = temp.next;
  }
};

//var list = new LinkedList();
//list.push(1);
//list.push(2);
//list.unshift(3);
//list.unshift(4);
//list.push(-1);
//list.inorder(function (node) {
//  console.log(node.data);
//});