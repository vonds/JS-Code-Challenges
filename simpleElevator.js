// https://www.codewars.com/kata/52ed326b8df6540e06000029
function goto(level, button) {
    console.log(level)
      return typeof button !== 'string' || button < 0 || button > 3 || 
             typeof level  !== 'number' || level  <  0  || level   > 3 || level ==1.5  ? 
             0 : parseFloat(button) - level;
}