// https://www.codewars.com/kata/59706036f6e5d1e22d000016
const wordsToMarks = (string) => [...string].reduce((a, s) => a + (s.charCodeAt() - 96), 0)
