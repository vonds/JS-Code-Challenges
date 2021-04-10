// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a
function sortString(string,ordering) {
    ordering=ordering.split``
    let arr1 = string.split``.filter(v=>ordering.includes(v)).sort((a,b)=>ordering.indexOf(a)-ordering.indexOf(b))
    let arr2 = string.split``.filter(v=>!ordering.includes(v))
    return arr1.join``+arr2.join``
}