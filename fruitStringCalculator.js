// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3
function calculate(string) {
    const arr=string.replace(/[^0-9\s]/g,'').trim().replace(/\s+/g,' ').split(' ')
    if (string.match(/loses/g)){
    return arr[0]*1-arr[1]*1
    }
    return arr[0]*1+arr[1]*1
}