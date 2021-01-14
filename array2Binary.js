// https://www.codewars.com/kata/559576d984d6962f8c00003c
function arr2bin(arr){
    return arr.filter(v => typeof v !== 'number').length>0 ? false: arr.reduce((a,b)=>a + b, 0).toString(2)
}