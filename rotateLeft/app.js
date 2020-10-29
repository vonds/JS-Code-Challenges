function rotLeft(array, step) {
    const newArray = [...array];
    for(let i = 1; i <= step; i++) {
        newArray.push(newArray.shift());
    }
    return newArray
  }
  
  console.log(rotLeft([1, 2, 3, 4, 5], 4)) // [5, 1, 2, 3, 4]
  console.log(rotLeft([1, 2, 3, 4, 5], 2)) // [3, 4, 5, 1, 2]