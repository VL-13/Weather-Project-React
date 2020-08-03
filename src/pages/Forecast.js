import React from 'react';
import { cities } from '../data/CitiesData';
import { ForecastInfo} from '../components/ForecastInfo';
export function Forecast(props) {
    return (
            <div className="forecast-infobox">
                <ForecastInfo cityName={cities[props.selectedCity]}/>
            </div>
    )
}