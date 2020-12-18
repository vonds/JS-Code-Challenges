// https://www.codewars.com/kata/54ba84be607a92aa900000f1
const createIsoHash = str => {
    const isoHash = {}
    for(let char of str) {
      isoHash[char] = isoHash[char] + 1 || 1
    }
    return isoHash
}
  
function isIsogram(str){
    const isoHash = createIsoHash(str.toLowerCase())
    for(let char in isoHash) {
      if(isoHash[char] > 1) return false
    }
    return true
}