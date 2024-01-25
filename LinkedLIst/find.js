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

const find_ = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

const recursive_find_ = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return recursive_find_(head.next, target);
};

const r = recursive_find_(a, 9);
console.log(r);
