// weather-service.js

console.log('hello');

// Function to fetch weather data for a specific city
async function fetchWeatherData(city, apiKey) {
    const baseUrl = 'https://api.weatherapi.com/v1';
    const url = `${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to fetch five-day forecast data
async function fetchForecastData(cityName, apiKey) {
    const baseUrl = 'https://api.weatherapi.com/v1';
    const forecastURL = `${baseUrl}/forecast.json?key=${apiKey}&q=${cityName}&days=5`;
    const response = await fetch(forecastURL);
    const data = await response.json();
    return data;
}

export { fetchWeatherData, fetchForecastData };
