import { useState, useEffect } from "react";

function useGeoLocation() {
    const [locationInfo, setLocationInfo] = useState(null);
    const [locationError, setLocationError] = useState(null);

    const success = (res) => {
        // console.log('Geolocation success:', res);
        setLocationInfo(res.coords);
    }

    const error = (res) => {
        console.log('Geolocation error:', res);
        setLocationError(res.message);
    }

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by this browser.');
            return;
        }

        if (!locationInfo && !locationError) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, [locationInfo, locationError]);

    return { locationInfo, locationError };
    
};

export default useGeoLocation;