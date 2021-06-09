// https://www.codewars.com/kata/528e95af53dcdb40b5000171
const factorial = n => n > 1 ? n * factorial(n - 1) : n < 0 ? null : 1