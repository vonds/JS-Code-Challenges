// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
    let x = 0
    let o = 0
  
    str.split('').forEach(char => {
      if(char.toLowerCase() === 'o') o++
      if(char.toLowerCase() === 'x') x++
    })
    return x === o
}