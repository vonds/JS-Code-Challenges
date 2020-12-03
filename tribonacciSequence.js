// https://www.codewars.com/kata/556deca17c58da83c00002db
function tribonacci(arr, n){
  if(arr.length > n) return arr.slice(0, n)
  const sum = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
  return tribonacci([...arr, sum], n)
}
