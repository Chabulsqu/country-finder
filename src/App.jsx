import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Country from './Components/country/Country';
import Countries from './Components/Countries/Countries'; 
import FormContainer from './Containers/formContainer/FormContainer';
import Header from './Components/Header/Header';


export default function App() {
  const [mode, setMode] = useState('light');
  const [countries, setCountries] = useState([]) //  Mutates acording to searchCountries and filterCountries, used to display the information
  const [countryData, setCountryData] = useState([]); // Used to have access to all countries, even when the user has sorted them

  const switchModes = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }
  const getAllCountries = async () => {
    const result = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    setCountries(result);
    setCountryData(result);
  }
  useEffect(() => {
    getAllCountries();
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Countries countries={countries} />}>
        <Route index element={<FormContainer countryData={countryData} setCountries={setCountries} countries={countries} />} />
      </Route>
      <Route path="/:country" element={<Country countryData={countryData} />} />
    </>
  ))

  return (<div className={`App ${mode}`}>
    <Header mode={mode} switchModes={switchModes} />
    <RouterProvider router={router} />
  </div>)
}
