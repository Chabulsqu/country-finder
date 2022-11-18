import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search for a country..." />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
        )
    }
}