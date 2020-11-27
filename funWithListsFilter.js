// https://www.codewars.com/kata/582041237df353e01d000084
function filter(head, p) {
    if (head) {
      return p(head.data) ? new Node(head.data, filter(head.next, p)) : filter(head.next, p);
    }
    return null;
}