function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
   
    const sqrt = Math.sqrt(num);
  
    for (let i = 2; i <= sqrt; i++) 
      if (num % i === 0) return false;
    return true;
  }