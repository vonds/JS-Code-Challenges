// https://www.codewars.com/kata/54fb853b2c8785dd5e000957
const chain = (v, fns) => fns.reduce(function(v, fn) { return fn(v) }, v)
