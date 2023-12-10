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


    // 5-Day Forecast Function
    function fiveDayForecast() {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
            `lat=33.8753&lon=-117.5664` + `&appid=${OPEN_WM_KEY}&units=imperial`)
            .then(response => response.json())
            .then( data => {
                console.log(data)
                let forecastData = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    const name = data.city.name;
                    const date = new Date(data.list[i].dt * 1000).toDateString();
                    const temp = data.list[i].main.temp;
                    const lowTemp = data.list[i].main.temp_min;
                    const highTemp = data.list[i].main.temp_max;
                    const description = data.list[i].weather[0].description;
                    const humidity = data.list[i].main.humidity;
                    const wind = data.list[i].wind.speed;
                    const pressure = data.list[i].main.pressure;
                    console.log(date);
                    // console.log(name);
                    // console.log(pressure);
                    // console.log(wind)
                    // console.log(humidity);
                    // console.log(description);
                    // console.log(temp);
                    // console.log(lowTemp);
                    // console.log(highTemp);
                    // console.log(data.list[i].main.temp);
                    // forecastData += `The Five day forecast weather is: ${temp} °F<br>`;
                    forecastData += `
                          <div class="col">
                            <div class="card h-100">
<!--                                              <img src="..." class="card-img-top" alt="...">-->
                              <div class="card-body">
                                <h4 class="card-title">${date}</h4>
                                <h5>Current Temperature: ${temp} °F</h5>
                                <h6>${lowTemp} °F / ${highTemp} °F</h6>
    <!--    Add AN IMAGE HERE THAT COROESPONDS WITH THE DESCRIPTION -->
                                <p class="card-text">Description: ${description}</p>
                                <p class="card-text">Humidity: ${humidity}</p>
                                <p class="card-text">Wind: ${wind}</p>
                                <p class="card-text">Pressure: ${pressure}</p>
                              </div>
                            </div>
                          </div>`;
                }
                const fiveDayWeather = document.querySelector("#fiveDayForecast");
                fiveDayWeather.innerHTML = forecastData;
            });
     }



    //-------------------------------------------- THIS IS THE CODE FOR MAPBOX -----------------------------------------
    mapboxgl.accessToken = MAPBOX_KEY;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-117.5664, 33.8753], // starting position [lng, lat] Corona, CA.
        zoom: 11 // starting zoom
    });
    // map.addControl(new mapboxgl.NavigationControl());

    currentWeatherInCorona();
    fiveDayForecast();
})();