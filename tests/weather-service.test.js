import { fetchWeatherData } from '../services/weather-service.js';

describe('fetchWeatherData function', () => {
    test('fetchWeatherData returns weather data for a specific city', async () => {
        const mockData = {
            location: { name: 'New York' },
            current: { temp_f: 70, condition: { text: 'Sunny' }, humidity: 60, wind_mph: 10, condition: { icon: 'sunny.jpg' } }
        };

        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(mockData)
        });

        const data = await fetchWeatherData('New York');
        expect(data).toEqual(mockData);
    });

    test('fetchWeatherData returns null if there is an error', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

        const data = await fetchWeatherData('New York');
        expect(data).toBeNull();
    });
});
