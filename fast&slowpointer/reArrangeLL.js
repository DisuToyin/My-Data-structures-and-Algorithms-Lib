class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(1);
let e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function middleNode(head) {
  let fast = head;
  slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseLL(head) {
  let prev = null;
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

function addNode(head, node) {
  let current = head;
  const newNode = new Node(node);
  newNode.next = current.next;
  current.next = newNode;
}

function reArrange(head) {
  let middle = middleNode(head);
  let secondHalf = reverseLL(middle);

  let firstHalf = head;
  while (firstHalf !== null && secondHalf !== null) {
    let temp = null;
    temp = firstHalf.next;
    firstHalf.next = secondHalf;
    firstHalf = temp;

    temp = secondHalf.next;
    secondHalf.next = firstHalf;
    secondHalf = temp;
    console.log(temp.val);
  }

  if (firstHalf !== null) {
    firstHalf.next = null;
  }
  //   return firstHalf;
}

console.log(reArrange(a));
// console.log(reverseLL(a));
