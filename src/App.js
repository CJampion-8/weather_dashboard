import React, { useState, useEffect } from 'react';
import useGetForecast from './components/getForecast.js';
import useGeoLocation from './components/useGeoLocation.js';
import './style.css';

function App() {
    const { forecast, getForecast, getForecastByCoordinates } = useGetForecast();
    const { locationInfo, locationError } = useGeoLocation();
    const [city, setCity] = useState('');
    const [weatherClass, setWeatherClass] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    // Change this to test different weather conditions, null is real forecast.
    const testWeatherCondition = null;

useEffect(() => {
    if (forecast) {
        const body = document.body;
        const condition = testWeatherCondition || forecast.current.condition.text.toLowerCase();

        // Reset any existing weather class
        body.classList.remove("sunny", "cloudy", "rainy", "snowy");

        if (condition.includes("sunny")) {
            // console.log('Changing to sunny decoration');
            setWeatherClass("sunny");
            body.classList.add("sunny");
        }
        else if (condition.includes("cloud") || condition.includes("overcast")) {
            // console.log('Changing to cloudy decoration');
            setWeatherClass("cloudy");
            body.classList.add("cloudy");
        }
        else if (condition.includes("rain") || condition.includes("thundery")) {
            // console.log('Changing to rainy decoration');
            setWeatherClass("rainy");
            body.classList.add("rainy");
        }
        else if (condition.includes("snow")) {
            // console.log('Changing to snowy decoration');
            setWeatherClass("snowy");
            body.classList.add("snowy");
        }
        else {
            setWeatherClass("");
            console.log(`${condition} is not a recognized weather condition.`);
        }
    }
}, [forecast]);

        const handleSubmit = async (e) => {
        e.preventDefault();
        if (!city.trim()) {
            alert('Please enter a valid city or zip code.');
            return;
        }
        setHasSearched(true);
        await getForecast(city);
        console.log(forecast);
    };

    const handleCurrentLocation = async () => {
        if (locationError) {
            alert(`Location error: ${locationError}`);
            return;
        }

        if (!locationInfo) {
            alert('Location information not available. Please enable location services and refresh the page.');
            return;
        }

        if (!locationInfo.latitude || !locationInfo.longitude) {
            alert('Invalid location coordinates. Please try again.');
            return;
        }

        setHasSearched(true);
        await getForecastByCoordinates(locationInfo.latitude, locationInfo.longitude);
        console.log('Weather fetched for current location:', forecast || locationInfo);
    };

    return (
        <>
        <div className="App">
            <div className="header">
                <h1>Weather Dashboard</h1>
                <input 
                    type="text" 
                    placeholder="Search City or Zip Code" 
                    onChange={(e) => setCity(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}/>
                    <div className="button-container">
                        <button type="submit" onClick={handleSubmit}>Search</button>
                        <button type="button" onClick={handleCurrentLocation}>Use Current Location</button>
                    </div>
            </div>
            
            <div className={`currentLocationWeather ${hasSearched ? 'weather-visible' : 'weather-hidden'}`}>
                {hasSearched && forecast ? (
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
                        <p>
                          <span style={{fontWeight: 'bold'}}>Humidity:</span> {forecast.current.humidity}%
                        </p>
                    </>
                ) : hasSearched && !forecast ? (
                    <p>Loading weather data...</p>
                ) : null }
            </div>
        </div>
        
        <a href="https://cjampion-8.github.io/project_portfolio" target="_blank" rel="noopener noreferrer" className="portfolioRedirect">
            Check out my other projects!
        </a>
        
        </>
    );
}

export default App;
