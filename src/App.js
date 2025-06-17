import React, { useState, useEffect } from 'react';
import useGetForecast from './Hooks/GetForecast.js';
import './style.css';

function App() {
    const { forecast, getForecast } = useGetForecast();
    const [city, setCity] = useState('');

    const [weatherClass, setWeatherClass] = useState('');

    useEffect(() => {
        if (forecast) {
            const body = document.body;
            const condition = forecast.current.condition.text.toLowerCase();

            // Remove all weather classes before adding the new one
            body.classList.remove("sunny", "cloudy", "rainy", "snowy");

            if (condition.includes("sunny")) {
                console.log('Changing to sunny decoration');
                setWeatherClass("sunny");
                body.classList.add("sunny");
            }
            else if (condition.includes("cloud") || condition.includes("overcast")) {
                console.log('Changing to cloudy decoration');
                setWeatherClass("cloudy");
                body.classList.add("cloudy");
            }
            else if (condition.includes("rain")) {
                console.log('Changing to rainy decoration');
                setWeatherClass("rainy");
                body.classList.add("rainy");
            }
            else if (condition.includes("snow")) {
                console.log('Changing to snowy decoration');
                setWeatherClass("snowy");
                body.classList.add("snowy");
            }
            else {
                body.classList.add("");
                console.log('No matching weather condition found');
            }
        }
    }, [forecast]);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await getForecast(city);
        console.log(forecast);
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Weather Dashboard</h1>
                <hr></hr>
                <input 
                    type="text" 
                    placeholder="Search City or Zip Code" 
                    onChange={(e) => setCity(e.target.value)} 
                />
                <button type="submit" onClick={handleSubmit}>Search</button>
            </div>

            <div className="currentLocationWeather">
                {forecast ? (
                    <>
                        <h2>{forecast.location.name}, {forecast.location.region}</h2>
                        <div className="currentCondition">
                            <img 
                                src={`https://${forecast.current.condition.icon}`} 
                                alt={`Icon for ${forecast.current.condition.text}`} 
                            />
                            <>{forecast.current.temp_f}°F</>
                        </div>
                        <p>{forecast.current.condition.text}</p>
                        <p>Humidity: {forecast.current.humidity}%</p>
                    </>
                ) : (
                    <p>Enter a city or zip code to get today's forecast.</p>
                )}
            </div>
        </div>
    );
}

export default App;
