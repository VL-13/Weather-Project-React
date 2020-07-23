import React from 'react';

export function Header() {
    return(
        <header>
            <div id='today'> </div>
            <nav>
                <ul>
                    <li id='index'><Link to="/">Home</Link></li>
                    <li id='list'><Link to="/list">Cities List</Link></li>
                    <li id='about'><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}