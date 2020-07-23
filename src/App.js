import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
