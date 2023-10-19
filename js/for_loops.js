"use strict";
// https://codeup-curriculum.web.app/curriculum/java/3.0.1/javascript-1/loops
// #1 Create a file named for_loops.js inside the js directory and link it to your loops.html file.
// #2
/** Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication
 * table for that number (just multiply by the numbers 1 through 10)*/
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
showMultiplicationTable(7);

// #3
/** Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
 * and output to the console whether each number is odd or even.*/
for (let i = 0; i < 10; i++) {
    let randomResult = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (randomResult % 2 === 0) {
        console.log(`${randomResult} is even.`);
    } else {
        console.log(`${randomResult} is odd.`);
    }
}

// #4
/** Create a for loop that uses console.log to create the output shown below.
 *  1
 *  22
 *  333
 *  4444
 *  55555
 *  666666
 *  7777777
 *  88888888
 *  999999999*/

for (let i = 1; i <= 9; i++) {
    let pyramid = "";
    for (let j = 1; j <= i; j++) {
        pyramid = i + pyramid;
    }
    console.log(pyramid);
}

// #5
/** Create a for loop that uses console.log to create the output shown below.

 100
 95
 90
 85
 80
 75
 70
 65
 60
 55
 50
 45
 40
 35
 30
 25
 20
 15
 10
 5*/

for (let i = 100; i >= 5; i = i - 5) {
    console.log(i);
}


