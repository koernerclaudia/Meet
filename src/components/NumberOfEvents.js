// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value
    setNumber(value)

    let ErrorText;
    if (number.length === isNaN || number.length <= 0) {
      ErrorText = "Please enter a valid number."
    } else {
      ErrorText = ""
      
    }
    setCurrentNOE(value);
    setErrorAlert(ErrorText);
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Pick # of events to list: </label>
      <br />
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