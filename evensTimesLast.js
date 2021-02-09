// https://www.codewars.com/kata/5a1a9e5032b8b98477000004
function evenLast(numbers) {
    const d = numbers.slice(-1)
    return numbers.reduce((a, b, i) => i % 2 === 0 ? a + b * d: a, 0)
}
