// https://www.codewars.com/kata/529b418d533b76924600085d
const toUnderscore = string => (''+string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase()