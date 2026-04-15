// Antonio Brozna

// This program prompts the user to enter a string, and then counts the frequency of each letter in the string. The results are printed to the console.

var readline = require('readline-sync');

var inputString = readline.question("Enter a string: ");

// Create an object to store letter frequencies
var letterFrequency = {};

// Loop through each character in the input string
for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    
    // Check if the character is a letter (a-z)
    if (char >= 'a' && char <= 'z') {
        if (letterFrequency[char]) {
            letterFrequency[char]++; // Increment count if letter already exists
        } else {
            letterFrequency[char] = 1; // Initialize count for new letter
        }
    }
}

// Print the frequency of each letter
console.log("Letter Frequency:");
for (var letter in letterFrequency) {
    console.log(letter + ": " + letterFrequency[letter]);
}   

//first repeated letter
var seenLetters = new Set();
var firstRepeatedLetter = null;

for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i].toLowerCase();
    
    if (char >= 'a' && char <= 'z') {
        if (seenLetters.has(char)) {
            firstRepeatedLetter = char;
            break;
        } else {
            seenLetters.add(char);
        }
    }
}

if (firstRepeatedLetter) {
    console.log("First repeated letter: " + firstRepeatedLetter);
} else {
    console.log("No repeated letters found.");
}