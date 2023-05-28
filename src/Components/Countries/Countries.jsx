import "./Countries.css";
import SearchCountries from "../searchCountries/SearchCountries";
import FilterCountries from '../filterCountries/FilterCountries';
import { Outlet, useNavigate } from "react-router-dom";

export default function Countries({ countries }) {
  const navigate = useNavigate();
  const handleClick = ({target}) => {
    navigate('/' + target.getAttribute('data-country'));
  }
  return (
    <main>
      <Outlet />
      {countries.map((country) => {
        return (
          <section key={country.name.common} data-country={country.name.common} onClick={handleClick}>
            <img src={country.flags.svg} alt=" " data-country={country.name.common} />
            <h2 id={country.name.common}>{country.name.common}</h2>
            <strong id={country.name.common}>Population: </strong> {country.population}
            <strong id={country.name.common}>Region: </strong> {country.region}
            <strong id={country.name.common}>Capital: </strong> {country.capital ? country.capital[0] : 'Unknown'}
          </section>
        );  
      })}
    </main>
  );
}