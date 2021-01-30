// https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b
const score = n => n === 0  ? 0: 2 ** (n.toString(2).length) - 1