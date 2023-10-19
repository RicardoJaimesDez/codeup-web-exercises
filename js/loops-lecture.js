"use strict";

// ----------------- WHILE LOOPS -------
// let i = 0;
//
// while (i < 10) {
//     console.log("While loop iteration #" + i);
//     i++;
// }

// Common Application
// let randomResult = 0;
// let loopCount = 0;
//
// while (randomResult !== 8) {
//     randomResult = Math.floor(Math.random() * (10 -1 + 1) + 1);
//     console.log(randomResult);
//     loopCount++;
// }
// console.log(`The random result: ${randomResult}`);
// console.log(`The number of loops: ${loopCount}`);

// --------- DO WHILE LOOPS -------------
// let i = 10;
// do {
//     console.log("While loop iteration #" + i);
//     i++;
// } while (i < 10);

// Common Application for DO WHILE LOOPS
// let userResponse;
// do {
//     console.log("Program running......[");
//     userResponse = confirm("Would you like to run the program again?");
// } while (userResponse === true);

// -------- FOR LOOPS ------------------
// for (let i = 0; i < 10; i++) {
//     console.log("For loop iteration #" + i);
// }

// Common Application for FOR LOOPS
// let arrNum = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }

// Uncommon Use Case of For Loops
// for (let i = 0; j = 9; i < 10; i++; j--) {
//     console.log("For loop iteration #" + i + ', j ='+ j);
// }

// ------------- BREAK -------------

var numberToStopAt = 5;

for (let i = 1; i < 100; i++) {
    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log("We have reached the stopping point: break!");
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log(`You will never see this line.`);
    }
}

// ------- CONTINUE ------------

for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log('Here is a lovely even number: ' + i);
}
