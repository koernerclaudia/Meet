// src/components/Event.js

  import React, { useState } from 'react';

// Mock data (import this from your file)
const mockEvent = {
  summary: "Learn JavaScript",
  start: {
    dateTime: "2020-05-19T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  location: "London, UK",
  description: "Have you wondered how you can ask Google to show you the list...",
};

const Event = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="event">
      {/* Collapsed view */}
      <h3>{mockEvent.summary}</h3>
      <p>
        <strong>Starts:</strong> {new Date(mockEvent.start.dateTime).toLocaleString()} ({mockEvent.start.timeZone})
      </p>
      <p>
        <strong>Location:</strong> {mockEvent.location}
      </p>

      {/* Toggle button */}
      <button onClick={toggleDetails}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Expanded view */}
      {isExpanded && (
        <div className="event-details">
          <p>{mockEvent.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
