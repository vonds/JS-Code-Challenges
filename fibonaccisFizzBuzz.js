// https://www.codewars.com/kata/57bf599f102a39bb1e000ae5
const fibsFizzBuzz = n => {
    if (n === 1) return [1]
    const arr = [1, 1]
    for (let i = 0; i <= n - 3; i++){
        let num = arr[i] + arr[i + 1]
        arr.push(num)
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0){arr[i] = 'FizzBuzz'}
        else if (arr[i] % 3 === 0) {arr[i] ='Fizz'}
        else if (arr[i] % 5 === 0) {arr[i] = 'Buzz'}
    }
    return arr
}