// src/components/NumberOfEvents.js


import React, { useState } from 'react';

const NumberOfEvents = ({ updateEventCount = () => {} }) => {
  const [eventCount, setEventCount] = useState(32); // Default number of events

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEventCount(value);
    updateEventCount(value);  // Assuming updateEventCount is passed as a prop
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        id="number-of-events"
        type="text"
        className="event-number-input"
        value={eventCount}
        onChange={handleInputChange}
        aria-label="Number of Events"
      />
    </div>
  );
};

export default NumberOfEvents;
