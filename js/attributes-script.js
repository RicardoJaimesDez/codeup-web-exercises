"use strict";
(() => {
    const colors = ['#FF2400', '#ff928d', '#0C2340', '#556b2f', '#c89c0b', '#a935f9'];
    let colorIndex = 0;

    setTimeout( () => {
        document.getElementById('profile-pic').src = '/images/codeup_duck_logo.png';
    }, 2000);

    setTimeout( () => {
        let changeName = document.querySelector('h2').innerHTML = 'Ricky Jaimes';
    }, 4000);

    setTimeout( () => {
        let profileDescription = document.getElementById('profile-desc');
        profileDescription.classList.add('new-description-style');
    }, 6000);

    // setInterval( ()=> {
    //     let changeCardBg = document.getElementById('profile-card');
    //     changeCardBg.classList.toggle('alt-bg');
    // }, 2000);

    // ---------------- BONUS ------------------------------
    const colorLoop = setInterval( () => {
        let changeCardBg = document.getElementById('profile-card');

        let randomColor = Math.floor(Math.random() * colors.length);

        changeCardBg.style.backgroundColor = colors[randomColor];

    }, 2000);
})();