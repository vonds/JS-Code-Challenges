// 84
// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001
const findDup = arr => arr.sort((a,b) => a - b).filter((v, i, arr) => v === arr[i + 1]) * 1
