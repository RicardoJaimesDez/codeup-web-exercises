"use strict";

(function () {
    // Declaring an array.
    let emptyArr = [];
    console.log(Array.isArray(emptyArr));

    let cheeses = ["Cheddar", "String", "Wensleydale"]; // This arrays contains 3 elements.

    let falsyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
    //...However, this can lead to some unintended results with a looping/iterative structure

    console.log(cheeses[1]) // this will print the second element in our cheese array.
    console.log(cheeses.indexOf("Cheddar")); // This will return and print 0
    console.log(cheeses[0].indexOf("Brie")); // This returns -1
    console.log(cheeses.indexOf("White Cheddar")); // This will return and print -1
    console.log(cheeses[cheeses.length - 1]); // This will get us the last element from our array

    console.log(cheeses.length)

    // Let's create a loop to print all of our cheeses to the console!
    for (let i = 0; i < cheeses.length; i++) {
        console.log(cheeses[i]);
    }

    for (let i = cheeses.length - 1; i >= 0; i--) {
        console.log(cheeses[i]);
    }

    //For Each version
    cheeses.forEach(function (cheese) {
        console.log(cheese);
    });

    cheeses.forEach(function (cheese, index) {
        console.log(`${index}: ${cheese}`);
    });

    cheeses.forEach(function (cheese) { // for each cannot be used to mutate the elements within the array
        cheese = "Bleu";
    })

    // console.log(cheeses);

    cheeses.forEach(function (cheese, index, array) {
        console.log(`${index}: ${cheese}`);
        console.log(array);
    });

    // For ... of Loops
    for (const cheese of cheeses) {
        console.log(cheese);
    }

    // The Spread Operator

    console.log(...cheeses)


    const beatles = ["Paul", "George", "Ringo", "John"];
    const newBeatles = [...beatles, "Paul?"];
    console.log(newBeatles);
    console.log(`~~~~~~~~~~~~~~~`);

    const exampleVals = [5, 8]
    const add = (x, y) => x + y;
    console.log(add(...exampleVals));
    console.log(`~~~~~~~~~~~~~~~`);

    const printNumberedList = (...vals) => {
        for (let i = 0; i < vals.length; i++) {
            console.log(`${i + 1}: ${vals[i]}`);
        }
    }

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    printNumberedList(...planets);
    console.log(`~~~~~~~~~~~~~~~`);
    const shoppingList = ["Milk", "Eggs", "Butter"];
    printNumberedList(...shoppingList);

})();