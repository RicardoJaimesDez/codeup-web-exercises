"use strict";

// Break and Continue Exercise
// #1 - Create a file named break_and_continue.js in the js directory.
// #2
/** Prompt the user for an odd number between 1 and 50.
 * Use a loop and a break statement to continue prompting the user if they enter invalid input.*/
// #3
/** Use a loop and the continue statement to output all the odd numbers between 1 and 50,
 * except for the number the user entered.*/


let userOddNumber = Number(prompt("Enter an odd number between 1 and 50:"));

while (userOddNumber < 1 || userOddNumber > 50 || userOddNumber % 2 === 0) {
    userOddNumber = Number(prompt("Invalid entry! Please enter an ODD number between 1 and 50:"))
    if (userOddNumber % 2 !== 0) {
        break;
    }
}
console.log("Number to skip is: " + userOddNumber);

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}


