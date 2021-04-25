// https://www.codewars.com/kata/5659c6d896bc135c4c00021e
const nextSmaller = num => {
    const arr = num.toString().split``.reverse()
    let outputString=''
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j<i; j++){
        if(arr[j] < arr[i]){
          let tempArr = arr.splice(j,1)
          const tempArr2 = arr.splice(0,i).sort().reverse()
          tempArr = tempArr.concat(tempArr2)
          outputString += arr.reverse().concat(tempArr).join("")
          return outputString.length === outputString.replace(/^0+/,'').length ? 
            outputString * 1 : 
            -1
        }
      }
    }
    return -1
}