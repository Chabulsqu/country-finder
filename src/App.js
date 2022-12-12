import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import SearchCountries from './Components/SearchCountries/SearchCountries';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.switchModes = this.switchModes.bind(this);
    this.state = {mode: 'App light'};
  }

  switchModes(event) {
    if (this.state.mode === 'App light') {
      this.setState({mode: 'App dark'});
      this.setState({content: <div role="presentation"><i className="fa-solid fa-moon"></i><em>Light Mode</em></div>});
    } else {
      this.setState({mode: 'App light'});
      this.setState({content: <div role="presentation"><i className="fa-thin fa-moon"></i><em>Dark Mode</em></div>});
    }
  }

  render() {
    return (<div className={this.state.mode}>
      <Header method={this.switchModes} />
      <SearchCountries />
    </div>)
  };
}

export default App;
