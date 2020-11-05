// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
const longestConsec = (strarr, k) => {
    const characterCount = strarr.length
    if (characterCount === 0 || k > characterCount || k <= 0) return ''
  
    return strarr.reduce((longest, item, i) => {
      const combined = strarr.slice(i, i + k).join('')
      return combined.length > longest.length ? combined : longest
    }, '')
}