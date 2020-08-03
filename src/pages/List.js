import React from 'react';
import { cities } from '../data/CitiesData';
import { CitiesList } from '../components/CitiesList';
export function List(props) {

    const citiesKeys = Object.keys(cities);
    const getFilteredCities = () => {
        return citiesKeys.filter(city => {
            if (city !== props.selectedCity) {
                return city
            }
        })
    }

    return (
            <div className='cities-list' id='locations'>
            {getFilteredCities().map(city => {
                return (<CitiesList key={city} cityName={cities[city].name}/>)
            })}
            </div>
    )
}