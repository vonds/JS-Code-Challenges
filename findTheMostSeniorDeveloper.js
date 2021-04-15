// https://www.codewars.com/kata/582887f7d04efdaae3000090
function findSenior(list) {
    let max = Math.max(...list.map(value => value.age))
    return list.filter(value => value.age === max)
}