const createCharMap = word => {
    const charMap = {}
    for(let char of word) {
      charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
  }
  
  const checkAnagram = (word, word2) => {
    const charMap = createCharMap(word)
    const charMap2 = createCharMap(word2)
    
    for(let char in charMap) {
      if(charMap[char] !== charMap2[char]) return false
    }
    return true
  }
  
  const anagrams = (word, words) => {
    const anagrams = []
    for(let word2 of words) {
      if(checkAnagram(word, word2)) anagrams.push(word2)
    }
    return anagrams
  }