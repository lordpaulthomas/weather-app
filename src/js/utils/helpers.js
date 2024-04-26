// helpers.js

// Function to display weather data in the DOM
export function displayWeather(weatherData, container) {
    const { location, current } = weatherData;
    const cityName = location.name;
    const temperature = current.temp_f;
    const condition = current.condition.text;
    const humidity = current.humidity;
    const windMph = current.wind_mph;
    const icon = current.condition.icon;

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    weatherCard.innerHTML = `
        <h3>${cityName}</h3>
        <img src="${icon}" alt="Weather Icon">
        <p>${temperature}°F</p>
        <p>${condition}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind MPH: ${windMph}</p>
    `;
    container.appendChild(weatherCard);
}

// Function to display the five-day forecast in the DOM
export function displayForecast(forecastData, container) {
    forecastData.forecast.forecastday.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <h3>${day.date}</h3>
            <img src="${day.day.condition.icon}" alt="Weather Icon">
            <p>Max Temp: ${day.day.maxtemp_f}°F</p>
            <p>Min Temp: ${day.day.mintemp_f}°F</p>
            <p>Condition: ${day.day.condition.text}</p>
        `;
        container.appendChild(forecastCard);
    });
}
