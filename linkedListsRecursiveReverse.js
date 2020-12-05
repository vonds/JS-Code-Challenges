// https://www.codewars.com/kata/55e725b930957a038a000042
function Node(data = null, next = null) {
    this.data = data
    this.next = next
  }
  
function reverse(list, prev = null) {
    return list ? reverse(list.next, new Node(list.data, prev)) : prev
}