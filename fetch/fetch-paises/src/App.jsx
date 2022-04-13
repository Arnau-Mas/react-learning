import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [matches, setMatches] = useState([])
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountries(data));
  },[])

  function catchCountry(e){
    setCountry(e.target.value)
    showCountries(e.target.value)
    /* console.log(countries[0].name.common) */
  }

  function showCountries(value){
    if(value.length){
      let name = value.toLowerCase();
      let nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
      let matchedCountries = countries.filter(country => country.name.common.startsWith(nameUpper));
      setMatches(matchedCountries)
    }else{
      setMatches([])
    }
  }

  return (
    <div>
      <h1>COUNTRIES</h1>
      <input onChange={catchCountry} value={country} type="text" name="" id="" />
      { matches.length>10 ? 
      <p>Too much coincidences</p> 
      : 
      matches.length<=10 && matches.length>1 ? 
        <div className='countries' >
          {matches.map(match => <p key={match.name.common}>{match.name.common}</p>)}
        </div> 
        : 
        matches.length==1 ? 
        <div><h3>{matches[0].name.common}</h3><img src={matches[0].flags.png}></img></div> 
        : <div></div>
      }
    </div>
  )
}

export default App
