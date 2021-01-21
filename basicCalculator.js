// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
function calculate(num1, operation, num2) {
    const ops = {
      '+': (x, y) =>  x + y,
      '-': (x, y) => x - y,
      '*': (x, y) => x * y,
      '/': (x, y) => y === 0 ? null : x / y 
    };
    return (ops[operation] || function() { return null })(num1, num2);
}