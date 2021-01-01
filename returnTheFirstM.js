// https://www.codewars.com/kata/593c9175933500f33400003e
function multiples(m, n){
    const arr = []
    for (let i = 1; i <= m; i++){
    arr.push(n * i)
    }
    return arr
}