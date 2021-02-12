// https://www.codewars.com/kata/54d418bd099d650fa000032d
const vampire_test = (a, b) => ('' + a + b).split('').sort().join() === (a * b + '').split('').sort().join()
