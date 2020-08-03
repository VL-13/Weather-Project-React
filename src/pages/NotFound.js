import React from 'react';

export function NotFound() {
    return (
        <React.Fragment>
            <div class="noise"></div>
            <div class="overlay"></div>
            <div class="terminal">
                <h1>Error <span class="errorcode">404</span></h1>
                <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p class="output">Please try to go back or return to the homepage.</p>
                <p class="output">Good luck.</p>
            </div>
        </React.Fragment>
    );
}
