"use strict";

(() => {
    // console.log(GH_KEY);
    const username = 'RicardoJaimesDez';
    const url = `https://api.github.com/users/${username}/events`;
    fetch(url, {headers: {'Authorization': `${GH_KEY}`}})
        .then(response => response.json())
        .then(data => console.log(data));




})();