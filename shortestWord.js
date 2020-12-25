// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// const createWordMap = s => {
//     const wordMap = {}
//     for(let char of s.split(' ')) {
//       wordMap[char] = char.length
//     }
//     return wordMap
// }
  
// function findShort(s){
//     const wordMap = createWordMap(s)
//     let min = 10
//     for(let word in wordMap) {
//       if(wordMap[word] < min) min = wordMap[word]
//     }
//     return min
// }

const findShort = s => Math.min(...s.split(" ").map (s => s.length))