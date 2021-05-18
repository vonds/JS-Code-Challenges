// https://www.codewars.com/kata/5c556845d7e0334c74698706
function fit_in(a, b, m, n) {
    if (a>n||b>n||a>m||b>m) return false
    return !(a + b > m && a + b > n)
}
