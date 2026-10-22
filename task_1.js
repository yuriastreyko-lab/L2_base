function hasTwoCubeSums(n) {
  if (n < 2) return false;

  const sumCount = new Map(); 
  const max = Math.cbrt(n);   

  for (let a = 1; a <= max; a++) {
    for (let b = a + 1; b <= max; b++) {
      const sum = a ** 3 + b ** 3;
      
      if (sum === n) {
        if (sumCount.has(sum)) {
          return true;
        }
        sumCount.set(sum, 1);
      } else if (sum > n) {
        break;
      }
    }
  }

  return false;
}
