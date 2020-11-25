// https://www.codewars.com/kata/5226eb40316b56c8d500030f
const pascalsTriangle = n => {
    let current = [1,1]
    let result = [1,1,1]
  
    if(n === 1) return [1]
    if(n === 2) return result
  
    for(let i = 2 ; i < n; i++){
      let next = [1]      
      for(let j = 0 ; j < current.length - 1 ; j++){
          next.push(current[j]+current[j + 1])
      }
      next.push(1)
      current = next;
      result = [...result, ...next]
    }
    return result
}