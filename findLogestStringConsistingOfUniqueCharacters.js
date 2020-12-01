// https://www.codewars.com/kata/5bcd90808f9726d0f6000091
function longestSubstringOf(str){
    let counter = 0
    let subStr = ''
    for(let i = 0, j = 0;  i < str.length; j = 0, i++) {
      while(j < subStr.length && subStr[j] !== str[i]) j++;
      subStr = (( j === subStr.length) ? subStr : subStr.slice(j+1)) + str[i];
      counter = Math.max(counter, subStr.length);
    }
    return counter
}
