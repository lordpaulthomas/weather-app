// script.js

import { fetchWeatherData, fetchForecastData } from './services/weather-service.js';
import { displayWeather, displayForecast } from './utils/helpers.js';

const apiKey = '673684410a424caf97665728242504';
const baseUrl = 'https://api.weatherapi.com/v1';

// Function to fetch weather data for a specific city and display it
export async function fetchAndDisplayWeather(city, container) {
    const weatherData = await fetchWeatherData(city, apiKey); // Pass apiKey here
    if (weatherData) {
        displayWeather(weatherData, container);
    }
}

// Function to fetch and display the five-day forecast for a specific city
export async function fetchAndDisplayForecast(city, container) {
    const forecastData = await fetchForecastData(city, apiKey); // Pass apiKey here
    if (forecastData) {
        displayForecast(forecastData, container);
    }
}

// Function to fetch weather data for random cities upon page load
export async function fetchAndDisplayRandomCities() {
    const randomCities = ['Oakland', 'Waldorf', 'Paris', 'Barcelona']; // Add more cities as needed
    const weatherCardsContainer = document.querySelector('.weather-cards');
    const forecastCardsContainer = document.querySelector('.forecast-cards');

    randomCities.forEach(async city => {
        await fetchAndDisplayWeather(city, weatherCardsContainer);
   
    });
}

// Call the fetchAndDisplayRandomCities function when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchAndDisplayRandomCities);
