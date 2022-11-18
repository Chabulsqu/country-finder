import React from "react";
import "./Countries.css";

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }

  async getDefaultCountries() {
    let array = [];
    let countries = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(Math.random() * 99);
      array.push(countries[index]);
    }
    return array;
  }
  render() {
    return (
      <article>
        {this.state.countries.map((country) => {
          return (
            <section>
              <img src={country.flags.png} alt=" " />
              <h2>{country.name.common}</h2>
              <strong>Population: </strong> {country.population}
              <strong>Region: </strong> {country.region}
              <strong>Capital: </strong> {}
            </section>
          );
        })}
        hola
      </article>
    );
  }

  async componentDidMount() {
    this.setState({ countries: await this.getDefaultCountries() });
  }
}