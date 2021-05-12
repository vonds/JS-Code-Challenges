// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd
function mygcd(x,y){
    let r = 0;
    while (x !== 0) {
      r = y % x;
      y = x;
      x = r;
    }
    return y;
}