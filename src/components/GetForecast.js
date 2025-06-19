import { useState } from 'react';
import useFetchWeather from './useFetch'; 

function useGetForecast() {
    const [city, setCity] = useState(null);
    const [forecast, setForecast] = useState(null); 
    const fetchForecastFromAPI = useFetchWeather();

    const getForecast = async (location) => {
        if (!location) {
            return;
        }

        setCity(location);
        console.log('Fetching weather data for:', location);

        try {
            const result = await fetchForecastFromAPI(location);
            if (result) {
                console.log(`Successfully fetched weather data for ${location}:`, result);
                setForecast(result);
                return result;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert(`Unable to find weather data for ${location}. Please try again.`);
        }
    };

    const getForecastByCoordinates = async (latitude, longitude) => {
        if (!latitude || !longitude) {
            alert('Invalid coordinates provided.');
            return;
        }

        const coordinates = `${latitude},${longitude}`;
        // console.log('Fetching weather data for coordinates:', coordinates);

        try {
            const result = await fetchForecastFromAPI(coordinates);
            if (result) {
                // console.log(`Successfully fetched weather data for coordinates ${coordinates}:`, result);
                setForecast(result);
                return result;
            }
        } catch (error) {
            console.error('Error fetching weather data by coordinates:', error);
            alert(`Unable to find weather data for your location. Please try entering a city name.`);        }
    };

    return { forecast, getForecast, getForecastByCoordinates };
}

export default useGetForecast;
