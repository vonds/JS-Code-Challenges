// https://www.codewars.com/kata/56e7d40129035aed6c000632
function easyLine(n) {
    for (var i = 1, sum = 1; i <= n; i++) {
      sum *= (n + i) / i
    }
    return Math.round(Math.log(sum))
}