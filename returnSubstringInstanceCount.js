// https://www.codewars.com/kata/5168b125faced29f66000005
const solution = (fullText, searchText) => (fullText.match(new RegExp(searchText, 'g')) || []).length
