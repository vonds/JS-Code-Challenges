// https://www.codewars.com/kata/5519e930cd82ff8a9a000216
function hammingWeight(x) {
    let i = 0
    while (x > 0) {
      i += x & 1
      x >>= 1
    }
    return i
}