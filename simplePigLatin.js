// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = str => str.split(" ").map(x => x.replace(/^(\w)(.*)/, '$2$1ay')).join(' ')