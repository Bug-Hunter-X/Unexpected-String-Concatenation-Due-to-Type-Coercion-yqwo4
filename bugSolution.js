function foo(a, b) {
  // Explicit type conversion using Number() to prevent string concatenation
  return Number(a) + Number(b);
}
console.log(foo(10, '20')); // Expected: 30, Actual: 30