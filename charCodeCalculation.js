// https://www.codewars.com/kata/57f75cc397d62fc93d000059
const calc = x =>(x.replace(/./g, x => x.charCodeAt()).match(/7/g) || []).length * 6