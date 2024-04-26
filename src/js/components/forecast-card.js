// forecast-card.js

// Function to create and append a forecast card to the DOM
export function createForecastCard(date, maxTemp, minTemp, conditionIcon, conditionText) {
    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');
    forecastCard.innerHTML = `
        <h3>${date}</h3>
        <img src="${conditionIcon}" alt="Weather Icon">
        <p>Max Temp: ${maxTemp}°F</p>
        <p>Min Temp: ${minTemp}°F</p>
        <p>Condition: ${conditionText}</p>
    `;
    return forecastCard;
}
