class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    current.next = prev;
    prev = current;
    current = current.next;
  }
  return prev;
};

console.log(reverseList(a));
