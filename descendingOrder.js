// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
const descendingOrder = n => +[...(n.toString())].map(Number).sort((a, b) => b - a).join('')
const descendingOrder = n => parseInt([...String(n)].sort().reverse().join(''))