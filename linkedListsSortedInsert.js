// https://www.codewars.com/kata/55cc33e97259667a08000044
function Node(data, nxt) {
    this.data = data;
    this.next = nxt;
}

function sortedInsert(head, data) {
    if(!head || data < head.data) return new Node(data, head);
    else {
      head.next = sortedInsert(head.next, data);
      return head;
    }
}