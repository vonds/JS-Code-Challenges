// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

const addBinary = ( a, b ) => {
    let sum = a + b
    let binary = ''
  
    while ( sum > 0 ) {
      binary = ( sum % 2 ) + binary;
      sum = Math.floor( sum / 2 );
    }
  
    return binary;
  }
  