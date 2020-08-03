import React, { Component } from 'react';
import './App.css';
import { Header, Footer } from './components';
import { About, Home, List, Forecast, NotFound } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: localStorage.getItem('selectedCity') || ''
    }
  }

  getSelectedCity = (city) => {
    this.setState({ selectedCity: city}, () => { localStorage.setItem('selectedCity', this.state.selectedCity)})
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route exact path="/forecast">
          <Forecast />
          </Route>
          <Route exact path="/">
            <Home selectedCity={this.state.selectedCity} getSelectedCity={this.getSelectedCity}  />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
      </Router>
    );
  }
}

export default App;