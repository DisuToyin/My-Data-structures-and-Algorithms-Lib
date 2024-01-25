class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const listValues = (head) => {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

const result = listValues(a);
console.log(result);
