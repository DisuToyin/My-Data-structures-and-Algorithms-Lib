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
let f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

f.next = c;

function hasCycle(head) {
  let slow = head;
  fast = head;

  while (fast !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

console.log(hasCycle(a));
