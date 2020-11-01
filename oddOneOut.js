// https://www.codewars.com/kata/59670a7591dae8b6900000e4

function oddNum(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0) return arr.indexOf(arr[i]);
    }
    return -1;
  }