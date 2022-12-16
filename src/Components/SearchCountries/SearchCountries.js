import React from "react";
import "./SearchCountries.css";
import CountryPage from '../CountryPage/CountryPage';

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.searchCountries = this.searchCountries.bind(this);
    this.filterCountries = this.filterCountries.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { countries: [], page: 'main' };
  }

  async getAllCountries() {
    let countries = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    return countries;
  }
  async getDefaultCountries() {
    let array = [];
    let countries = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(Math.random() * 250);
      array.push(countries[index]);
    }
    return array;
  }

  searchCountries(event) {
    if (event.target.value.length === 0) {
      let defaultCountries = this.state.defaultCountries;
      this.setState({countries: defaultCountries});
      return;
    }
    let searchedArray = [];
    let value = event.target.value.toLowerCase();
    for (let country of this.state.defaultCountries) {
      if (country.name.common.toLowerCase().includes(value)) {
        searchedArray.push(country);
      }
    }
    this.setState({countries: searchedArray});
  }
  filterCountries(event) {
    let filteredArray = [];
    for (let country of this.state.defaultCountries) {
      if (country.region == event.target.value) {
        filteredArray.push(country);
      } 
    }
    this.setState({countries: filteredArray});
  }
  changePage(event) {
    if (this.state.page === 'main' || event.target.id !== "button") {
      let countryName = event.target.id;
      for (let country of this.state.defaultCountries) {
        if (country.name.common != countryName) {
          continue;
        } else {
          countryName = country;
        }
      }
      this.setState({page: 'country', selectedCountry: countryName});
    } else {
      this.setState({page: 'main'});
    }
  }

  render() {
    if (this.state.page === 'main') {
    return (
      <main>
        <form>
          <br role="presentation" />
          <div role="presentation" className="input-wrapper">
            <input type="text" placeholder="Search for a country..." onInput={this.searchCountries} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <select defaultValue="" onChange={this.filterCountries}>
            <option value="" disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <article>
          {this.state.countries.map((country) => {
            return (
              <section key={country.name.common} id={country.name.common} onClick={this.changePage}>
                <img src={country.flags.svg} alt=" " id={country.name.common} />
                <h2 id={country.name.common}>{country.name.common}</h2>
                <strong id={country.name.common}>Population: </strong> {country.population}
                <br id={country.name.common} />
                <strong id={country.name.common}>Region: </strong> {country.region}
                <br id={country.name.common} />
                <strong id={country.name.common}>Capital: </strong> {country.capital ? country.capital[0] : 'Unknown'}
                <br id={country.name.common} />
                <br id={country.name.common} />
              </section>
            );
          })}
        </article>
      </main>
    );
    } else {
      return <CountryPage country={this.state.selectedCountry} method={this.changePage} defaultCountries={this.state.defaultCountries} />;
    }
  }

  async componentDidMount() {
    this.setState({ countries: await this.getDefaultCountries(), defaultCountries: await this.getAllCountries()});
  }
}