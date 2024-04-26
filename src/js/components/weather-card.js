// weather-card.js

// Function to create and append a weather card to the DOM
export function createWeatherCard(city, temperature, condition, humidity, windMph, icon) {
    const weatherCardsContainer = document.querySelector('.weather-cards');

    const card = document.createElement('div');
    card.classList.add('weather-card');
    card.innerHTML = `
        <h3>${city}</h3>
        <img src="${icon}" alt="Weather Icon">
        <p>${temperature}°F</p>
        <p>${condition}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind MPH: ${windMph}</p>
    `;
    weatherCardsContainer.appendChild(card);

    // Add event listener to the weather card
    card.addEventListener('click', async () => {
        const forecastData = await fetchForecastData(city);
        displayForecast(forecastData);
    });
}
