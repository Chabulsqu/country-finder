import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: <div role="presentation"><i className="fa-regular fa-moon"></i><em>Dark Mode</em></div>}
    }

    render() {
        return (
            <header>
                <h1>Where in the world?</h1>
                <button onClick={this.props.method}>
                    {this.state.content}
                </button>
            </header>
        )
    }
}