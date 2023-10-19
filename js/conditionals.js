"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === 'blue') {
        return "Blue is the color of the sky.";
    } else if (color === 'red') {
        return "Strawberries are red.";
    } else if (color === 'cyan') {
        return "I don't know anything about cyan.";
    } else if (color === 'orange') {
        return "Pumpkins are orange."
    } else if (color === 'green') {
        return "The grass is green."
    } else {
        return `I don't anything about the color ${color}`;
    }
}

// console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('cyan'));
// console.log(analyzeColor('yellow'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let color = "blue";
switch (color) {
    case 'blue':
        console.log("Blue is the color of the sky.");
        break;
    case 'red':
        console.log("Strawberries are red.");
        break;
    case 'cyan':
        console.log("I don't know anything about cyan.");
        break;
    case 'orange':
        console.log("Pumpkins are orange.");
        break;
    case 'green':
        console.log("The grass is green.");
        break;
    default:
        console.log(`I don't know anything about ${color}`);
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let inputColor = prompt("Enter your favorite color: ").toLocaleLowerCase();
analyzeColor(inputColor);
alert(analyzeColor(inputColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let discountFive = 1;
let discountFour = .5;
let discountThree = .35;
let discountTwo = .25
let discountOne = .10
let discountZero = 0;

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 5) {
        return `Your total discount is 100% and your total is \$${totalAmount - totalAmount}`;
    } else if (luckyNumber === 4) {
        return `Your discount amount is 50% and your total is \$${totalAmount - (totalAmount * discountFour)}`;
    } else if (luckyNumber === 3) {
        return `Your discount amount is 35% and your total is \$${totalAmount - (totalAmount * discountThree)}`;
    } else if (luckyNumber === 2) {
        return `Your discount amount is 25% and your total is \$${totalAmount - (totalAmount * discountTwo)}`;
    } else if (luckyNumber === 1) {
        return `Your discount amount is 10% and your total is \$${totalAmount - (totalAmount * discountOne)}`;
    } else if (luckyNumber === 0) {
        return "Sorry you do not get a discount and your total is $" + totalAmount;
    }
}

console.log(calculateTotal(5, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(0, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
let totalBill = parseFloat(prompt("What is your total bill?"));

alert(`Your lucky number is ${luckyNumber}.\nYour total before the discount is $${totalBill.toFixed(2)}.\n${calculateTotal(luckyNumber, totalBill)}.`);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userNumber = confirm("Would you like to enter a number?");
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        alert(`${number} is an even number!`)
    } else {
        alert(`${number} is an odd number!`)
    }
}

function plusOneHundred(number) {
    alert(`The number you enter, ${number}, plus 100 equals to ${number + 100}.`);
}

function negOrPos(number){
    if (number > 0) {
        alert("The number you entered is positive!");
    } else {
        alert("The number you entered is negative!");
    }
}

if (userNumber === true) {
    let enteredNumber = Number(prompt("What number would you like to enter?"));
    isEvenOrOdd(enteredNumber);
    plusOneHundred(enteredNumber);
    negOrPos(enteredNumber);
} else {
    alert("Thanks for stopping by! See Ya!")
}








