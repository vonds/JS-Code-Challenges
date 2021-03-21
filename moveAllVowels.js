// https://www.codewars.com/kata/56bf3287b5106eb10f000899
function moveVowel(input) {
    const arr1 = []
    const arr2 = []
    input.split('').map(v => v.match(/[aeiou]/i) ? 
        arr1.push(v) : 
        arr2.push(v)
    )
    return arr2.concat(arr1).join('')
}