// https://www.codewars.com/kata/594093784aafb857f0000122
function diff(a, b){
    const sort1 = a.filter( v => !b.includes(v))
    const sort2 = b.filter(v => !a.includes(v))
    return [...new Set(sort1.concat(sort2))].sort()
}