"use strict";

// ----------------- USING Functions -------------------

// console.log((helloWorld()));
// console.log(parseInt("67"));
// console.log(confirm("Would you like to submit?"));

// let hello = helloWorld();
// console.log(hello);

// --------------- DEFINING FUNCTIONS -------------------

// EXAMPLE 1

 /* function helloWorld() {

    console.log('Hi Imugi');
    return 'Hello World';
}
*/
// EXAMPLE 2(A function with inputs)
/*
function addNumber(num1, num2) {
//    let sum = num1 + num2; this could be left out and just return the sum
    return num1 + num2;
}

let sum = addNumber(5, 5);
console.log(sum);
*/
// -------------------------- ANONYMOUS FUNCTIONS -----------------------

const increment = function(x) {
    return x + 1;
}

let two = increment(1);
console.log(two);

// ------------------------- ARROW FUNCTIONS -----------------------------

function helloWorld() {

    console.log('Hi Imugi');
    return 'Hello World';
}

const helloWorld2 = () => 'Hello World!';

console.log(helloWorld2());

// ------------------------ DEFAULT FUNCTIONS PARAMETER VALUE ------------
/* - Coming back to this tomorrow.
function addNumber(num1, num2) {
    if
    return  num1 + num2;
}
*/

// --------------------- FUNCTION SCOPE --------------------------

// GLOBAL VARIABLES

let globalVar = "I'm a global variable :)";


// varAlert()

// Local Variable

function localVarAlert() {
    let localVar = "Look, I'm a local variable";
    alert(localVar);
    alert(globalVar);
    return localVar;
}

let local = localVarAlert();
console.log(local);

// --------------- Guidelines and Best Practices --------------------

// - If your functions hits 20 lines consider refactoring.
// - A function should do one thing
// - Functions should be at the top of your page.




