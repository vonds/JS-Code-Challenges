// https://www.codewars.com/kata/56541980fa08ab47a0000040
const printerError = s => {
	const passingLetters = ("abcdefghijklm").split("")
	var a = s.length
	let i = 0
	let count = 0
	while (i < a){
		if (passingLetters.indexOf(s[i])===-1) count++
		i++
	}
	return (count + "/" + a)
}