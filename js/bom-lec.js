(() => {
    // window.alert("JavaScript is here!"); // window.alert works the same as alert. window. is for the browser.

    // setTimeout(function (){
    //     alert("You'll see this after 5 seconds.");
    //     }, 5000);

    // let count = 0;
    //
    // const intervalId = setInterval(function () {
    //     alert("You'll see this every 8 seconds.");
    //     count++;
    //     if (count === 3) {
    //         clearInterval(intervalId);
    //     }
    //     }, 8000);
    //
    // console.log(count);

    // window.location = "https://google.com"


    setTimeout(function () {
        document.getElementsByTagName("body")[0].style.background = 'orangered';
    }, 500);

    setTimeout(function (){
    location.reload();
    }, 5000);


})();