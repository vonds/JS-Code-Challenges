// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
const arbitrate = (input, n) => input.replace(/1/,'m').replace(/[^m]/gi,'0').replace(/[m]/gi,'1')