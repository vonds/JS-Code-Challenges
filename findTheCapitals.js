// https://www.codewars.com/kata/539ee3b6757843632d00026b
const capitals = word => {
	let a = word.split('')
  let arr = []
  for (let i=0;i<word.length;i++){
    if(a[i] === a[i].toUpperCase()) arr.push(i)  
  }
  return arr
}