import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Filter from './Components/Filter/Filter';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
