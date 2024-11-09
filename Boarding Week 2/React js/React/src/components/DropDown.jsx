import React, { useState } from 'react'

const data = {
    India:{
        Maharastra:['Mumbai','pune'],
        Karnataka:['Banglore',"Mysure"]
    },
    USA:{
        California:["Los Anglese","San Franciso"],
        Texas:["Houston","Austin"]
    },
    Canada:{
        Ontairo:['Toronto','Hamilton'],
        Quebec:['Montreal','Queubec']
    }
}

const DropDown = () => {
    const[selectedCountry,setSelectedCountry] = useState('')
    const[selectedState,setSelectedState] = useState('')
    const[selectedCity,setSelectedCity] = useState('')

    const countries = Object.keys(data)
    const states = selectedCountry ? Object.keys(data[selectedCountry])  : []
    const cities = selectedCountry && selectedState ? data[selectedCountry][selectedState] : []

    const handleCountryChange  = (event) =>{
        setSelectedCountry(event.target.value);
        setSelectedState('');
        setSelectedCity('');
    }
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedCity(''); // Reset city on state change
      };
    
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };
  return (
    <div>
      <h3>Cascading Drop Down</h3>
      <label >
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((country)=>(
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
      </label>
      {selectedCountry && (
        <label >
        State:
        <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {states.map((state)=>(
                <option key={state} value={state}>
                    {state}
                </option>
            ))}
        </select>
      </label>
      )}

      {selectedState && (
        <label >
        City:
        <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {cities.map((city)=>(
                <option key={city} value={city}>
                    {city}
                </option>
            ))}
        </select>
      </label>
      )}
      <div>
        <h4>Selected values:</h4>
        <p>Country :{selectedCountry || 'None'}</p>
        <p>State :{selectedState || 'None'}</p>
        <p>City :{selectedCity || 'None'}</p>
      </div>
    </div>
  )
}

export default DropDown
