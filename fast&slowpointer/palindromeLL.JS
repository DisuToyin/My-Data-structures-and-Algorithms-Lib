class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(2);
let d = new Node(1);
// let e = new Node(7);

a.next = b;
b.next = c;
c.next = d;

// Find the middle of the linked list using the fast and slow pointer technique.
// Reverse the second half of the linked list.
// Compare the first half with the reversed second half.

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
// console.log(reverseLL(a));

function middleNode(head) {
  let slow = head;
  fast = head;
  middle = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function isPalindromLL(head) {
  let middle = middleNode(head);
  let firstHalf = head;
  let secondHalf = reverseLL(middle);

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}

console.log(isPalindromLL(a));
