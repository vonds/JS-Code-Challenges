// https://www.codewars.com/kata/52988f3f7edba9839c00037d
const reject = (array, iterator) => array.filter(el => !iterator(el))