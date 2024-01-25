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

const sumLinkedList = (head) => {
  let current = head;
  let running_sum = 0;
  while (current !== null) {
    running_sum = running_sum + current.val;
    current = current.next;
  }

  return running_sum;
};

const x = sumLinkedList(a);
console.log(x);
