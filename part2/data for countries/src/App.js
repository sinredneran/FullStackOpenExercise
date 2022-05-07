import axios from 'axios';
import { useEffect, useState } from 'react'
import SingleItem from './components/SingleItem';
import Inputs from './components/Inputs';
import CountryList from './components/CountryList';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showCount, setShowCount] = useState();

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value;
    
    if(value===''){
      setShow(false);
    }
    
    const checkCountry = (country) => {
      let countryName = country.name.common.toLowerCase();
      return countryName.includes(value.toLowerCase());
    }

    const filteredArray = value === '' ? [] : countries.filter(checkCountry);
    let objectArray = filteredArray.map((x) => {
      let obj = {
        name: x.name.common,
        capital: x.capital,
        area: x.area,
        languages: x.languages,
        flags: x.flags.png,
      }
      return obj;
    });
    setFilterItems(objectArray);
  }

  const handleShow = (country) => {
    console.log(country);
    setShow(true);
    setShowCount(country);
  }

  return (
    <div className='App'>
      <Inputs handleSearch={handleSearch} />
      {
        filterItems.length > 10 ? <p>too many matches</p> :
          filterItems.length === 1 ?
            <SingleItem filterItems={filterItems[0]} />
            :
            <CountryList filterItems={filterItems} handleShow={handleShow} />
      }
      {show && <SingleItem filterItems={showCount} />}
    </div>
  )
}

export default App;