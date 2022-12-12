import React from "react";
import "./SearchCountries.css";

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.searchCountries = this.searchCountries.bind(this);
    this.filterCountries = this.filterCountries.bind(this);
    this.state = { countries: [] };
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

  render() {
    let counter = 0;
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
              <section key={counter++}>
                <img src={country.flags.png} alt=" " />
                <h2>{country.name.common}</h2>
                <strong>Population: </strong> {country.population}
                <br />
                <strong>Region: </strong> {country.region}
                <br />
                <strong>Capital: </strong> {}
                <br />
                <br />
              </section>
            );
          })}
        </article>
      </main>
    );
  }

  async componentDidMount() {
    this.setState({ countries: await this.getDefaultCountries(), defaultCountries: await this.getAllCountries()});
  }
}