function solve(str){
    const numArr = [];
    let num = "";
    for (var i = 0; i < str.length; i++) {
    
      if (!isNaN(str[i]) && isNaN(str[i+1])) {
        num += str[i];
        numArr.push(parseInt(num));
        num = "";
      } else if (!isNaN(str[i])) {
        num += str[i];
      }
    }
  }