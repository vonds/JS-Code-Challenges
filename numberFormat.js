// https://www.codewars.com/kata/565c4e1303a0a006d7000127
const numberFormat = number => {
    let x = number.toString()
    const pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x))x = x.replace(pattern, "$1,$2")
    return x
}