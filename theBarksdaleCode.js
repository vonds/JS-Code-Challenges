// https://www.codewars.com/kata/573d498eb90ccf20a000002
const decode = (string) => {
    const obj = {1:9,2:8,3:7,4:6,5:0,6:4,7:3,8:2,9:1,0:5}
    return string.split('').map(char => char = obj[char]).join('')
}