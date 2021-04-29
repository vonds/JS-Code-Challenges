// https://www.codewars.com/kata/52aae14aa7fd03d57400058f
const removeZeros = array => [...array[`filter`](v => v !== 0 && v !== '0'),...array[`filter`](v => v === 0|| v === '0')]
