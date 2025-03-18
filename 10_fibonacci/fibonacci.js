const fibonacci = function(n) {
    // Handle edge cases
  if (n <= 0) return "Input should be a positive integer.";
  if (n === 1 || n === 2) return 1;
  
  let a = 1, b = 1;
  
  // Loop to calculate Fibonacci numbers
  for (let i = 3; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
