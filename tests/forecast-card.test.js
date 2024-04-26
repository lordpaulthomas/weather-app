import { createForecastCard } from '../components/forecast-card.js';

test('createForecastCard function creates a forecast card with the correct data', () => {
    document.body.innerHTML = '<section class="forecast-cards"></section>';
    const forecastCardsContainer = document.querySelector('.forecast-cards');

    createForecastCard('2024-04-26', 'sunny.jpg', 80, 60, 'Sunny');

    const forecastCardElement = forecastCardsContainer.querySelector('.forecast-card');
    expect(forecastCardElement).toBeInTheDocument();
    expect(forecastCardElement).toHaveTextContent('2024-04-26');
    expect(forecastCardElement).toHaveTextContent('Max Temp: 80°F');
    expect(forecastCardElement).toHaveTextContent('Min Temp: 60°F');
    expect(forecastCardElement).toHaveTextContent('Condition: Sunny');
});
