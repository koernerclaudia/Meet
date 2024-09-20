// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value
    setNumber(value)
    let errorText;
    if(value === isNaN || value.length <= 0) { 
      errorText = 'Please enter a valid number'
    } else {
      errorText = ''
    }
    setCurrentNOE(value)
    setErrorAlert(errorText) 
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
       
      />
    </div>
  );
}

export default NumberOfEvents;