import { useState } from 'react';
import useFetchWeather from './UseFetch'; 

function useGetForecast() {
    const [city, setCity] = useState(null);
    const [forecast, setForecast] = useState(null); 
    const fetchForecastFromAPI = useFetchWeather(); 

    const getForecast = async (city) => {
        if (!city) {
            alert('Please enter a city or zipcode.');
            return;
        }

        setCity(city);
        console.log('Fetching weather data for:', city);

        try {
            const result = await fetchForecastFromAPI(city);
            if (result) {
                console.log(`Successfully fetched weather data for ${city}:`, result);
                setForecast(result);
                return result;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert(`Unable to find weather data for ${city}. Please try again.`);
        }
    };

    return { forecast, getForecast };
}

export default useGetForecast;
