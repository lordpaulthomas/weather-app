// weather-app.js

import { fetchAndDisplayWeather, fetchAndDisplayForecast } from './script.js';

const defaultCities = ['Oakland, CA', 'Waldorf, MD', 'Palm Springs, CA', 'Paris'];

document.addEventListener('DOMContentLoaded', () => {
    const weatherCardsContainer = document.querySelector('.weather-cards');
    const forecastCardsContainer = document.querySelector('.forecast-cards');

    defaultCities.forEach(city => {
        fetchAndDisplayWeather(city, weatherCardsContainer);
        fetchAndDisplayForecast(city, forecastCardsContainer);
    });
});
