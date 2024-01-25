class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

const e = new Node(10);
const f = new Node(20);
const g = new Node(30);

a.next = b;
b.next = c;

e.next = f;
f.next = g;

// example  A->B-C, E->F->G result A->E->B->F->C->G
const zipper = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
};

console.log(zipper(a, e));
