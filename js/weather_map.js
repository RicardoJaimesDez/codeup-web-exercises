"use strict";

(() => {
    // Current Weather Functions For Corona, CA
    function currentWeatherInCorona() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?` +
            `lat=33.8753&lon=-117.5664` + `&appid=${OPEN_WM_KEY}&units=imperial`)
            .then(data => data.json())
            .then(currentWeather => {
                const date = new Date(currentWeather.dt * 1000).toDateString();
                const currentTemp = currentWeather.main.temp;
                const coronaWeather = document.querySelector('#coronaWeather');
                coronaWeather.innerHTML = `<h2 class="fancy-header">Temperature in Corona is:</h2>  
                                            <p>${currentTemp} °F\n Date: ${date}</p>`;
            })
            .catch(error => alert(`Error fetching weather data: ${error.message}`));
    }

    // 5-Day Forecast Function
    function fiveDayForecast(lngLat) {
        const { lat, lng } = lngLat;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPEN_WM_KEY}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                let forecastData = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    const date = new Date(data.list[i].dt * 1000).toDateString();
                    const city = data.city.name;
                    const temp = data.list[i].main.temp;
                    const lowTemp = data.list[i].main.temp_min;
                    const highTemp = data.list[i].main.temp_max;
                    const description = data.list[i].weather[0].description;
                    const humidity = data.list[i].main.humidity;
                    const wind = data.list[i].wind.speed;
                    const pressure = data.list[i].main.pressure;
                    forecastData += `
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h3 class="card-title bg-light">${city}</h3>
                                <p>${date}</p>
                                <h5>Current Temperature: ${temp} °F</h5>
                                <h6>L: ${lowTemp} °F / H: ${highTemp} °F</h6>
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
            })
            .catch(error => console.error(`Error fetching forecast data: ${error.message}`));
    }

    //-------------------------------------------- THIS IS THE CODE FOR MAPBOX -----------------------------------------
    mapboxgl.accessToken = MAPBOX_KEY;
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-117.5664, 33.8753],
        zoom: 11
    });

    // Place Marker Function
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-117.5664, 33.8753])
        .addTo(map);

    // Drag Marker Function
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        fiveDayForecast(lngLat);
    }

    marker.on('dragend', onDragEnd);

    // Add Search to The Map
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false,
        placeholder: 'Search for a location',
    });

    map.addControl(geocoder);

    // Event handler For When Location Is Selected
    geocoder.on('result', (event) => {
        const lngLat = event.result.geometry.coordinates;
        marker.setLngLat(lngLat);
        onDragEnd();
    });

    currentWeatherInCorona();
    fiveDayForecast(marker.getLngLat());
    onDragEnd();
})();