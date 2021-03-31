// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
const firstNonRepeatingLetter = s => {
    return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || ''
}