// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
const persistence = (num, i = 0) => {
    if([...num.toString()].length === 1) return i
    let newNum = [...num.toString()].reduce((previous, current) => {
      return parseInt(previous) * parseInt(current) 
     })
    i++
    return persistence(newNum, i)
}

