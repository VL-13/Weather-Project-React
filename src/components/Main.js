import React from 'react';
import { CityDropdown } from './CityDropdown';
import { CityWeatherInfo } from './CityWeatherInfo';
import { cities } from '../data/CitiesData';
export function Main(props) {
    
    return (
        <main className="locations">
            <CityWeatherInfo selectedCity={props.selectedCity}  />
            <CityDropdown selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity} />
            {props.selectedCity && cities[props.selectedCity] ? (
                    <img id="image-placeholder" src={cities[props.selectedCity].url} alt={`${cities[props.selectedCity].name} skyline`} />
                ) : (
                    <img id="image-placeholder" src="https://mforum.ist/media/55c53eae4489d1620bfd33c5a6658cec-png.8371/full" alt="backgroung" />
            )}
        </main>
    )
}
