// https://www.codewars.com/kata/56b7251b81290caf76000978
function getLastDigit(index) {
    let n1 = 1
    let n2 = 1
    for(let i = 3; i <= index; i++) {
      let x = n1
      n1 = n2
      n2 = (n2 + x) % 10
    }
    return n2
}