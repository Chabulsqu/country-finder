import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Where in the world?</h1>
                <div role="presentation">
                    <i className="fa-regular fa-moon"></i>
                    <em>Dark Mode</em>
                </div>
            </header>
        )
    }
}