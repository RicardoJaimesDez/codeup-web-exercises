"use strict";

(() => {
    // Pull Corona, CA. Weather
    // fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    //     `lat=33.8753&lon=-117.5664` +
    //     `&appid=${OPEN_WM_KEY}`)
    //     .then( data => console.log(data));

    // Function for current weather in Corona, CA.
    function currentWeatherInCorona() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?` +
        `lat=33.8753&lon=-117.5664` + `&appid=${OPEN_WM_KEY}&units=imperial`)
        .then( data => data.json())
        .then( currentWeather => {
            const date = new Date(currentWeather.dt * 1000).toDateString();
            const currentTemp = currentWeather.main.temp;
            // console.log(currentTemp);
            // console.log(date);

            const coronaWeather = document.querySelector('#coronaWeather');
            coronaWeather.innerHTML = `Current Temperature in Corona is: ${currentTemp} °F\n Date: ${date}`;

        })
        .catch(error => alert(`Error fetching weather data: ${error.message}`));
    }
currentWeatherInCorona();

    // 5-Day Forecast Function
    function fiveDayForecast() {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
            `lat=33.8753&lon=-117.5664` + `&appid=${OPEN_WM_KEY}&units=imperial`)
            .then(response => response.json())
            .then( data => {
                console.log(data)
                let forecastData = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    const fiveDayWeatherForecast = data.list[i].main.temp;
                    // console.log(data.list[i].main.temp);
                    forecastData += `The Five day forecast weather is: ${fiveDayWeatherForecast} °F<br>`;
                }
                const fiveDayWeather = document.querySelector("#fiveDayForecast");
                fiveDayWeather.innerHTML = forecastData;
            });
     }

fiveDayForecast();



})();