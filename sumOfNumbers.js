function getSum( a,b ) {
    const lower = a < b ? a : b
    const higher = a > b ? a : b
    let answer = 0
    if(a === b) return a
    for(let i = lower; i <= higher; i++) {
      answer += i
    }
    return answer
  }