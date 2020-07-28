import React from 'react';
import {NavLink} from "react-router-dom";

export function Header() {
    return(
        <header>
            <div id='today' > WeatherApp</div>
            <nav>
                <ul>
                    <li id='index'><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li id='list'><NavLink exact activeClassName="active" to="/list">Cities List</NavLink></li>
                    <li id='about'><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}