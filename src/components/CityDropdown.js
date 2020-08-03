import React from 'react';
import { cities } from '../data/CitiesData';

export function CityDropdown(props) {
    
    const citiesKeys = Object.keys(cities);

    const handleCityChange = (e) => {
        const city = e.target.value;
        if(!cities[city]) 
        {
            props.getSelectedCity('');
            return
        }
        props.getSelectedCity(city)
    }

    return (
        <select value={props.selectedCity} onChange={handleCityChange} className="locations__select" id="city-selector" name="city-selector">
            <option value="none">---Select---</option>
            {
                citiesKeys.map(city => {
                return (<option id={city} key={city} value={city}>{cities[city].name}</option>)
                })
            }
        </select>
    )
}