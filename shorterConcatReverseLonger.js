// https://www.codewars.com/kata/54557d61126a00423b000a45
const shorter_reverse_longer = (a, b) => {
    let x
    let y
    if (b.length > a.length) {
      x = b
      y = a
    } else {
      x = a
      y = b
    } 
    x = x.split(''); x = x.reverse(); x = x.join('')
    return y + x + y; 
}