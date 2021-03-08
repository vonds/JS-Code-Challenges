// https://www.codewars.com/kata/5631213916d70a0979000066
function pattern(n){
    const arr = []
    for(let i = 1; i < n + 1; i++){
      arr.push('1' + '*'.repeat(i - 1) + i)
    }
    return arr.join('\n').replace('1', '')
}