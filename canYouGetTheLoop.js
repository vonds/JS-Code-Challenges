// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
function loop_size(node){
    let turtle = node
    let rabbit = node
    do {
      turtle = turtle.getNext()
      rabbit = rabbit.getNext().getNext()
    }
    while (turtle != rabbit)

    let count = 0
    do {
      ++count
      rabbit = rabbit.getNext()
    }
    while (turtle != rabbit)

    return count
}