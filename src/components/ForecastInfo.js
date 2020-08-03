import React, { useState, useEffect } from 'react';
import { getForecast } from '../services';

export function ForecastInfo(props) {

    const [data, item, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
                
    useEffect(() => {
        getForecast(props.cityName).then((data) => {
            return data.list.reduce((list, item) => {
                const dateKeys = new Date(item.dt_txt).getDate();
                if (!list[dateKeys]) {
                    list[dateKeys] = [];
                }
                list[dateKeys].push(item);
                return list;
            }, {})
        }).then(result => {
            setData(result)
            setIsLoading(false)
        })
    }, [props.cityName])

    if (isLoading) {
        return (<p>Processing data...</p>)
    }
    if (data) {
        return (
            <div className="forecast-info">
                <div>dd/mm/yyyy</div>
                <div><img className="weather-icon" src="http://openweathermap.org/img/wn/{item.weather[0].icon}@2x.png" /></div>
                <div>{item.weather[0].description}</div>
                <div className="info-line"><p> Temperature:</p><p>{item.main.temp.toFixed(0)} °C</p></div>
                <div className="info-line"><p> Wind speed:</p><p>{item.wind.speed} km/h</p></div>
                <div className="info-line"><p> Atmospheric pressure:</p><p>{item.main.pressure} hPa</p></div>
                <div className="info-line"><p> Humidity:</p><p>{item.main.humidity} %</p></div>
            </div>
        )
    }
    return (<p>Sorry something went wrong :( , Please refresh page! <button onClick={() => this.handleReload(this.props.cityName)}>Reload</button></p>)

}