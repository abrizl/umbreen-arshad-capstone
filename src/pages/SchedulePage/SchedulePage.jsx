import './SchedulePage.scss';
import React, { useState, useEffect } from 'react';
import { fetchCities, fetchAreasByCity } from '../../services/api';
import ScheduleForm from '../../components/ScheduleForm/ScheduleForm';



function SchedulePage() {

    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    // Fetch cities on page load
    useEffect(() => {
        const loadCities = async () => {
        try {
            const cityData = await fetchCities();
            setCities(cityData);
        } catch (err) {
            console.error('Error fetching cities:', err);
        }
        };

        loadCities();
    }, []);

    // Fetch areas when a city is selected
    useEffect(() => {
        if (selectedCity) {
        const loadAreas = async () => {
            try {
            const areaData = await fetchAreasByCity(selectedCity);
            setAreas(areaData);
            } catch (err) {
            console.error('Error fetching areas:', err);
            }
        };

        loadAreas();
        }
    }, [selectedCity]);


    return(
        <>
            <ScheduleForm cities={cities} areas={areas} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        </>
    )
}

export default SchedulePage;