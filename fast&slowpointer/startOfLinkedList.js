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

function findCycleStart(head) {
  let slow = head;
  fast = head;
  cycle_length = 0;

  while (fast !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      cycle_length = calculateCycleLength(slow);
      break;
    }
  }

  return findStart(head, cycle_length);
}

function calculateCycleLength(slow) {
  let current = slow;
  cycle_length = 0;
  // since we know there is a cycle we might never get to the end of the linkedlist
  while (true) {
    current = current.next;
    cycle_length = cycle_length + 1;
    if (current === slow) {
      break;
    }
  }

  return cycle_length;
}

function findStart(head, cycle_length) {
  let pointer1 = head;
  let pointer2 = head;

  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length = cycle_length - 1;
  }

  while (true) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;

    if (pointer1 === pointer2) break;
  }

  return pointer1;
}

console.log(findCycleStart(a));
