// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
	return s.split('').map((char, i) => {
    return char[0].toUpperCase() + char.toLowerCase().repeat(i)
  }).join('-')
}