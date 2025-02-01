# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug related to type coercion. When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected results.

## Bug

The `foo` function attempts to add two values, but due to type coercion, it produces an incorrect result. The expected output is 30, but the actual output is 1020.

## Solution

The solution ensures both operands are numbers before addition to prevent type coercion.