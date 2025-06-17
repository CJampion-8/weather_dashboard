const API_KEY = "f6df06a704ed45c484a201616252703";

export default function useFetchWeather() {
    const fetchWeather = async (city) => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
        }
    };

    return fetchWeather;
}
