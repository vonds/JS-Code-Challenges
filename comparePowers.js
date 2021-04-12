// https://www.codewars.com/kata/55b2549a781b5336c0000103
const comparePowers = ([a,b],[x,y]) => {
    const f = Math.log10(a)*b
    const s = Math.log10(x)*y
    return f === s ? 0 : f > s ? -1 : 1
}