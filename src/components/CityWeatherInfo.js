import React, { Component } from 'react';
import { cities } from '../data/CitiesData';
import { getByCity } from '../services'

export class CityWeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedCity: ''
        }
    }
    componentDidMount() {
        if (this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity });
            getByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data }))
        }
    }

    componentDidUpdate() {
        if (this.props.selectedCity && this.state.selectedCity !== this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity });
            getByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data }))
        }
    }

    render() {
        if (!this.props.selectedCity) return null
        if (this.state.data) {
            const { name, main, wind, sys, weather } = this.state.data;
            return (
                <div className="weather-info">
                    <div className="city-name">{name}, {sys.country}</div>
                    <div className="temperature"> {main.temp.toFixed(0)}°C </div>
                    <div className="description"> {weather[0].description}<hr /></div>
                    <div className="info-line"> <p>Feels like:</p> <p>{main.feels_like.toFixed(0)}°C </p></div>
                    <div className="info-line"> <p>Wind speed:</p> <p>{wind.speed} km/h </p></div>
                    <div className="info-line"> <p>Atmospheric pressure:</p> <p>{main.pressure} hPa</p></div>
                    <div className="info-line"> <p>Humidity:</p> <p>{main.humidity} %</p></div>
                </div>
            )
        }
        return null
    }
}