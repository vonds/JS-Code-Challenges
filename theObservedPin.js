// https://www.codewars.com/kata/5263c6999e0f40dee200059d
const getPINs = ob => {
    const obj = {
     "0": ["0", "8"],
     "1": ["1", "2", "4"],
     "2": ["2", "3", "5", "1"],
     "3": ["3", "6", "2"],
     "4": ["4", "1", "5", "7"],
     "5": ["5", "2", "6", "8", "4"],
     "6": ["6", "3", "9", "5"],
     "7": ["7", "4", "8"],
     "8": ["8", "5", "9", "0", "7"],
     "9": ["9", "6", "8"]
   }
     return ob.split('').map(o => obj[o]).reduce((start, tail) => {
       if (!start) return tail
   
       return start.reduce((list, combination) =>
         list.concat(tail.map(key => combination + key))
       , [])
     }, null)
}