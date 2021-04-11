// https://www.codewars.com/kata/5862fb364f7ab46270000078
const encrypt = (text, rule) => text.split('').map(value => String.fromCharCode((value.charCodeAt()+rule)%256)).join(``)
