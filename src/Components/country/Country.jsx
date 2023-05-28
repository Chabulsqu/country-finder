import { useLocation, useNavigate } from "react-router-dom";


export default function Country({ countryData }) {
    const location = useLocation();
    const navigate = useNavigate();

    const getNativeNames = () => {
        if (selectedCountry.name.nativeName == undefined) {
            return 'Unknown';
        }
        const countryArrayed = Object.entries(selectedCountry.name.nativeName);
        let finalName;
        for (const element of countryArrayed) {
            if (element[0] != 'eng') {
                finalName = element[1].common;
            } 
        }
        if (finalName == undefined) {
            finalName = selectedCountry.name.nativeName.eng.common;
        }
        return finalName;
    }
    const getCountryCurrency = () => {
        if (selectedCountry.currencies == undefined) {
            return 'No Official Currency';
        } else {
            let finalCurrency;
            let counter = 0;
            for (const currency in selectedCountry.currencies) {
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
    const getCountryLanguages = () => {
        if (selectedCountry.languages == undefined) {
            return 'No Official Language';
        } else {
            let finalLanguage;
            let counter = 0;
            const languagesArrayed = Object.entries(selectedCountry.languages);
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
    const getBorderCountries = () => {
        if (selectedCountry.borders === undefined) {
            return 'None';
        } else {
            const array = selectedCountry.borders.map(border => {
            let finalCountry;
            for (const data of countryData) {
                if (data.cca3 == border) {
                    finalCountry = data.name.common;
                }
            }
            return <div role="presentation" className="country-border" id={finalCountry} key={finalCountry} onClick={navigate('/' + finalCountry.name.common)}>{finalCountry}</div>;
            })
        return <div role="presentation" className="border-container">{array}</div>
        }
    }
    const selectedCountry = countryData.filter(data => data.name.common === location.pathname.substring(1));
    console.log(countryData);
    return (
            <article className="country-container">
                <div role="presentation" onClick={navigate('/')} className="button-container" id="button">
                    <i className="fa-solid fa-arrow-left" id="button"></i>
                    <button type="button" id="button">Back</button>
                </div>
                <img src={selectedCountry.flags.svg} alt=" " />
                <br />
                <div role="presentation" className="info-container">
                    <div role="presentation" className="text-container">
                        <h1 className="country-title">{selectedCountry.name.common}</h1>
                        <br />
                        <strong>Native Name: </strong>{getNativeNames()}
                        <br />
                        <strong>Population: </strong> {selectedCountry.population}
                        <br />
                        <strong>Region: </strong> {selectedCountry.region}
                        <br />
                        <strong>Sub Region: </strong> {selectedCountry.subregion}
                        <br />
                        <strong>Capital: </strong> {selectedCountry.capital ? selectedCountry.capital[0] : 'Unknown'}
                        <br />
                        <strong>Top Level Domain: </strong> {selectedCountry.tld}
                        <br />
                        <strong>Currencies:</strong> {getCountryCurrency()}
                        <br />
                        <strong>Languages:</strong> {getCountryLanguages(this)}
                        <br />
                    </div>
                    <h3>Border Countries:</h3>
                    {getBorderCountries()}
                </div>
            </article>
        );
}