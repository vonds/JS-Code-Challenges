
// https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5
function scoreMatrix(matrix) {
    let score=0;
    matrix.map((e,j)=>{
    if (j%2===0){
      return e.map((v,i)=>i%2===0?score+=v:score-=v)
    } else {
       return e.map((v,i)=>i%2!==0?score+=v:score-=v)
    }}) 
    return score;
}