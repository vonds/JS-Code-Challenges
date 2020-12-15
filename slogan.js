// https://www.codewars.com/kata/58bf79fdc8bd4432d6000029
function slogans(p,r) {
    let count = 0;
    let inSlogan = '';
    for (let char of r) {
      inSlogan += char;
      if(!p.includes(inSlogan)) {
        count++;
        inSlogan = char;
      }
    }
    if (inSlogan.length > 0) count++;
    return count;
}
