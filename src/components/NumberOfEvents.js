// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value
    setNumber(value)
    let errorText;

    const numericValue = Number(value);
     // Check if the value is not a number or if it's empty
     if (isNaN(numericValue) || value.trim() === '' || numericValue <= 0) {
      errorText = 'Oops: Please enter a valid number';
    } else {
      errorText = '';
      setCurrentNOE(numericValue);  // Only update if the input is a valid number > 0
    }

    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input"># of Events: </label>
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