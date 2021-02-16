// https://www.codewars.com/kata/58e4fbd63258cefa4100002c
const pizzaPrice = (d,p) => {
    return Math.round(p / (Math.PI * d * d) * 400) / 100 || 0
}