var readline = require('readline-sync');

var num = readline.question("Enter a positive number less than or equal to 100: ");

if (num <= 1 || num > 100) {
    console.log("Invalid input. Please enter a positive number greater than or equal to1 and less than or equal to 100.");
    }
else {
    for (var i = 2; i <= num; i++) {
        checkNumber = i;
        if (isPrime(checkNumber)) {
            console.log(i + " is a prime number.");
        }
        else {
            console.log(i + " is not a prime number.");
        }
    }
}

function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) return false;
  
  // 2 is the only even prime number
  if (num === 2) return true;
  
  // Skip all other even numbers immediately
  if (num % 2 === 0) return false;

  // Check divisors from 3 up to the square root, skipping even numbers
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}