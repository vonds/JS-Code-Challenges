// https://www.codewars.com/kata/537baa6f8f4b300b5900106c
const circleArea = radius => radius <= 0 ||typeof radius !== 'number' ? false : +((Math.PI * radius * radius).toFixed(2))
