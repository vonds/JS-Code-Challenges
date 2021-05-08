// https://www.codewars.com/kata/560d6ebe7a8c737c52000084
const notVisibleCubes = n => {
    if (n < 3) return 0
    return (n-2) * (n-2) * (n-2)
}