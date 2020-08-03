import React, { Component } from 'react';
import { getByCity } from '../services'
export class CitiesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null
        }
    }


    componentDidMount() {
        this.setState({ selectedCity: this.props.selectedCity })
        getByCity(this.props.cityName).then((data) => {
            this.setState({
                data,
                isLoading: false
            })
        }).catch(err => this.setState({ isLoading: false }))
    }

    handleReload = (cityName) => {
        this.setState({ isLoading: true })
        getByCity(this.props.cityName).then((data) => {
            this.setState({
                data,
                isLoading: false
            })
        }).catch(err => this.setState({ isLoading: false }))
    }

    render() {
        if (this.state.isLoading) {
            return (<div >
            <p className='cities-list'>Processing data...</p>
            </div>)
        }
        if (this.state.data) {
            return (
                
                    <div className="city-box-info">
                        <p> {this.props.cityName}</p>
                        <p> {this.state.data.main.temp.toFixed(0)}°C</p>
                    </div>
                
            )
        }
        return (<p>Sorry something went wrong :( , Please refresh page! <button onClick={() => this.handleReload(this.props.cityName)}>Reload</button></p>)
    }
}