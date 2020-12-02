// https://www.codewars.com/kata/550554fd08b86f84fe000a58
function inArray(array1,array2){
  return array1.filter(substr => array2.some(word => {
    return word.indexOf(substr) > -1
  })).sort()
}
