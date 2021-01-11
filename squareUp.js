// https://www.codewars.com/kata/5a8bcd980025e99381000099
function squareUp(n) {
    let res = []; 
    for (let i = 1; i <= n; i++)
      for (let j = n; j >= 1; j--)
        res.push(j <= i ? j : 0);
    return res;   
}