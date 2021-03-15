// https://www.codewars.com/kata/55749101ae1cf7673800003e
function pattern(n){
    const output= []
    for(let i=1;i<=n;i++){
      if (i%2==0)output.push((''+i).repeat(i))
    }
   return output.join('\n')
}