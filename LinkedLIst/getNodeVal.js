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

const getNodeVal = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    count++;
    current = current.next;
  }
  return -1;
};

const getNodeValRecursively = (head, index) => {
  if (index === 0) return head.val;
  if (head === null) return -1;

  return getNodeValRecursively(head.next, index - 1);
};

const r = getNodeValRecursively(a, 4);
console.log(r);
