// child.js

// Get the numbers from command line arguments
const args = process.argv.slice(2); // Skip the first two default args
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.error('Invalid input. Please provide two numbers.');
    process.exit(1);
}

// Perform multiplication
const result = num1 * num2;

// Output the result
console.log(`The product of ${num1} and ${num2} is: ${result}`);
