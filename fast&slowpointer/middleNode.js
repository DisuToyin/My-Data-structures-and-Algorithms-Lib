class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function middleNode(head) {
  let slow = head;
  fast = head;
  middle = null;

  while (fast !== null) {
    if (fast.next == null) {
      middle = slow;
      return middle.val;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return -1;
}

console.log(middleNode(a));
