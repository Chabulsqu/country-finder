import React from 'react';
import './CountryPage.css';

export default class CountryPage extends React.Component {

    getNativeNames(country) {
        if (country.name.nativeName == undefined) {
            return 'Unknown';
        }
        const countryArrayed = Object.entries(country.name.nativeName);
        let finalName;
        for (const country of countryArrayed) {
            if (country[0] != 'eng') {
                finalName = country[1].common;
            } 
        }
        if (finalName == undefined) {
            finalName = country.name.nativeName.eng.common;
        }
        return finalName;
    }
    getCountryCurrency(country) {
        if (country.currencies == undefined) {
            return 'No Official Currency';
        } else {
            let finalCurrency;
            let counter = 0;
            for (const currency in country.currencies) {
                if (counter === 0) {
                    finalCurrency = currency;
                } else {
                    finalCurrency += ', ' + currency;
                }
                counter++;
            }
            return finalCurrency;
        }   
    }
    getCountryLanguages(country) {
        let finalLanguage;
        if (country.languages == undefined) {
            return 'No Official Language';
        } else {
            let finalLanguage;
            let counter = 0;
            const languagesArrayed = Object.entries(country.languages);
            for (const language of languagesArrayed) {
                if (counter === 0) {
                    finalLanguage = language[1];
                } else {
                    finalLanguage += ', ' + language[1];
                }
                counter++;
                
            }
            return finalLanguage;
        }
    }
    getBorderCountries() {
        if (this.props.country.borders === undefined) {
            return 'None';
        } else {
            const array = this.props.country.borders.map(country => {
            let finalCountry;
            for (const result of this.props.defaultCountries) {
                if (result.cca3 == country) {
                    finalCountry = result.name.common;
                }
            }
            return <div role="presentation" className="country-border" id={finalCountry} key={finalCountry} onClick={this.props.method}>{finalCountry}</div>;
            })
        return <div role="presentation" className="border-container">{array}</div>
        }
    }

    render() {
        return (
            <article className="country-container">
                <div role="presentation" onClick={this.props.method} className="button-container" id="button">
                    <i className="fa-solid fa-arrow-left" id="button"></i>
                    <button type="button" id="button">Back</button>
                </div>
                <img src={this.props.country.flags.svg} alt=" " />
                <br />
                <div role="presentation" className="info-container">
                    <div role="presentation" className="text-container">
                        <h1 className="country-title">{this.props.country.name.common}</h1>
                        <br />
                        <strong>Native Name: </strong>{this.getNativeNames(this.props.country)}
                        <br />
                        <strong>Population: </strong> {this.props.country.population}
                        <br />
                        <strong>Region: </strong> {this.props.country.region}
                        <br />
                        <strong>Sub Region: </strong> {this.props.country.subregion}
                        <br />
                        <strong>Capital: </strong> {this.props.country.capital ? this.props.country.capital[0] : 'Unknown'}
                        <br />
                        <strong>Top Level Domain: </strong> {this.props.country.tld}
                        <br />
                        <strong>Currencies:</strong> {this.getCountryCurrency(this.props.country)}
                        <br />
                        <strong>Languages:</strong> {this.getCountryLanguages(this.props.country)}
                        <br />
                    </div>
                    <h3>Border Countries:</h3>
                    {this.getBorderCountries()}
                </div>
            </article>
        );
    }
}