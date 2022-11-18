import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    render() {
        return (
            <form>
                <select>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        )
    }
}