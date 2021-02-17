// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
function duplicates(array) {
    array = array.slice().sort();
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] === array[i + 1]){
          count++
          array[i] = ''
          array[i+1] = ''
        }
    }
    return count
}
  