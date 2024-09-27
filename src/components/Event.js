// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h3>{event && event.summary}</h3>
      <p>{event && event.location}</p>
      <p>{event && (new Date(event.start.dateTime)).toUTCString()}</p>

      {showDetails && (
        <>
          <hr className="hr" /> {/* Horizontal line before details */}
          <p className="details">{event && event.description}</p>
        </>
      )}

      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "hide details" : "show details"}
      </button>
    </li>
  );
};

export default Event;