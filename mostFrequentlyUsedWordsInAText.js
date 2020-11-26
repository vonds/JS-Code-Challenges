const createWordsMap = words => {
    const wordsMap = {}
    for(let word of words) {
      wordsMap[word.toLowerCase()] = wordsMap[word.toLowerCase()] + 1 || 1
    }
    return wordsMap
}
  
const removeDuplicates = arr => {
    const newArr = []
    const set = new Set(arr)
    set.forEach(char => newArr.push(char))
    return newArr
}
  
const findMaxWord = map => {
    let max = 0
    let maxWord = ''
    for(let word in map) {
      if(map[word] > max) {
        max = map[word]
        maxWord = word
      }
    }
    return maxWord
  }
  
  function topThreeWords(text) {
    const answer = []
    const wordsArr = text.split(/[^A-Z0-9']/ig).filter(s => s !== '')
    if(wordsArr.length < 2) return wordsArr[0] === '\'' ? [] : wordsArr
    if(wordsArr.length === 3) return removeDuplicates(wordsArr).reverse()
    const wordsMap = createWordsMap(wordsArr)
    for(let i = 0; i < 3; i++) {
      let maxWord = findMaxWord(wordsMap)
      answer.push(maxWord)
      delete wordsMap[maxWord]
    } 
    return answer
  }