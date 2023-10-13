"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my Website!');

let favoriteColor = prompt('What is your favorite color?');
alert(`Awesome! My favorite color is ${favoriteColor} too!`);

// Exercise 3 from Intro Section
// Exercise 3 - Movie Rentals

let littleMermaid = prompt('How many days did you rent the Little Mermaid for?', '3');
let brotherBear = prompt('How many days did you rent Brother Bear for?', '5');
let hercules = prompt('How many days did you rent Hercules for?', '1');

let rentalRate = prompt('What is the daily rental rate?', '3');

let lilMermaidTotal = littleMermaid * rentalRate;
let bBearTotal = brotherBear * rentalRate;
let herculesTotal = hercules * rentalRate;

lilMermaidTotal = Number(lilMermaidTotal);
bBearTotal = Number(bBearTotal);
herculesTotal = Number(herculesTotal);

let totalCost = lilMermaidTotal + bBearTotal + herculesTotal;

alert(`The total cost of all three rentals is $${totalCost.toFixed(2)}`);

// Exercise 3 - Contract Pay

let googlePay = prompt('How much did Google pay per hour?', '400');
let amazonPay = prompt('How much did Amazon pay per hour?', '380');
let facebookPay = prompt('How much did Facebook pay per hour?', '350');

let googleHrs = prompt('How many hours did you work for Google?', '6');
let amazonHrs = prompt('How many hours did you work for Amazon?', '4');
let facebookHrs = prompt('How many hours did you work for Facebook?', '10');

let totalGooglePay = googlePay * googleHrs;
let totalAmazonPay = amazonPay * amazonHrs;
let totalFacebookPay = facebookPay * facebookHrs;

totalGooglePay = Number(totalGooglePay);
totalAmazonPay = Number(totalAmazonPay);
totalFacebookPay = Number(totalFacebookPay);

let totalContractPay = totalGooglePay + totalAmazonPay + totalFacebookPay;

alert(`The total payment received for all contracts was $${totalContractPay.toFixed(2)}`);



