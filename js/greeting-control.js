"use strict";

import { getRandNumber } from "./greeting-logic.js";

const form = document.querySelector('#myForm');
form.addEventListener('submit', function (e) {
   e.preventDefault();

   const name = document.querySelector('#name').value;
   let greetings = getRandNumber();
   let p = document.createElement('p');
   const message = document.querySelector('#message');
   message.innerHTML = '';
   p.innerText = `${greetings}, ${name}!! I hope you are having a great day!`;

   message.appendChild(p);
});


