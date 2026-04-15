var readline = require('readline-sync');

var num = readline.question("Enter a number: ");
var sum = 0;

for (var i = 1; i <= num; i++) {
    sum += i;
}

console.log("The sum of numbers from 1 to " + num + " is: " + sum);