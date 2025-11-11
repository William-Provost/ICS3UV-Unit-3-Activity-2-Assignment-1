/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-10
 * @fileoverview This program will round off a set of numbers
 * to a specific number of decimal places and display them
 * using different field sizes.
 */

// constants
const num1: number = 8.5467;
const num2: number = 9.6382;
const num3: number = 18.5146;
const num4: number = 125.496;

// output header
console.log("Number Rounding Program");
console.log("------------------------");

// process & output
// padEnd() is used to align columns
console.log(
  `Original: ${num1.toFixed(4).padEnd(8)} | Field size: 10 | 3 decimal places -> ${num1.toFixed(3).padStart(10)}`
);
console.log(
  `Original: ${num2.toFixed(4).padEnd(8)} | Field size: 8  | 5 decimal places -> ${num2.toFixed(5).padStart(8)}`
);
console.log(
  `Original: ${num3.toFixed(4).padEnd(8)} | Field size: 6  | 1 decimal place  -> ${num3.toFixed(1).padStart(6)}`
);
console.log(
  `Original: ${num4.toFixed(4).padEnd(8)} | Field size: 3  | 1 decimal place  -> ${num4.toFixed(1).padStart(3)}`
);

// program end
console.log("\nDone.");
