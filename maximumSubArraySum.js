// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
const maxSequence = arr => {
  let current = 0
  return arr.reduce((max, num) => {
    current = Math.max((current + num), 0)
    return Math.max(current, max)
  }, 0)
}
