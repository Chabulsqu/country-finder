import { useRef } from 'react';
import FilterCountries from "../../Components/filterCountries/FilterCountries";
import SearchCountries from "../../Components/searchCountries/SearchCountries";


export default function FormContainer({ setCountries, countryData, countries }) {
    const handleSearch = ({ target: { value } }) => {
        if (value.trim().length === 0) {
            return;
        }
        const lowercasedValue = value.toLowerCase();
        const searchedArray = [];
        countryData.map(country => country.name.common.toLowerCase().includes(lowercasedValue) && searchedArray.push(country));
        if (searchedArray.toString() !== countries.toString() || searchedArray.length !== 0) { // Avoids making unnecesary changes to the state
            setCountries(searchedArray); 
        }
    }
    const handleFilter = ({target: {value}}) => {
        value !== '' ? setCountries(countryData.filter(country => country.region === value)) : setCountries(countryData);
    }   

    return <form onSubmit={event => event.preventDefault()}>
        <SearchCountries handleSearch={handleSearch} />
        <FilterCountries handleFilter={handleFilter} />
    </form>
}