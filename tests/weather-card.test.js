import { createWeatherCard } from '../components/weather-card.js';

test('createWeatherCard function creates a weather card with the correct data', () => {
    document.body.innerHTML = '<section class="weather-cards"></section>';
    const weatherCardsContainer = document.querySelector('.weather-cards');

    createWeatherCard('New York', 70, 'Sunny', 60, 10, 'sunny.jpg');

    const weatherCardElement = weatherCardsContainer.querySelector('.weather-card');
    expect(weatherCardElement).toBeInTheDocument();
    expect(weatherCardElement).toHaveTextContent('New York');
    expect(weatherCardElement).toHaveTextContent('70°F');
    expect(weatherCardElement).toHaveTextContent('Sunny');
    expect(weatherCardElement).toHaveTextContent('Humidity: 60');
    expect(weatherCardElement).toHaveTextContent('Wind MPH: 10');
});
