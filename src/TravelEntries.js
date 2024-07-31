import React from 'react';

const TravelEntries = ({ entries }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <h3>{entry.destination}</h3>
          <p>{new Date(entry.date).toLocaleDateString()}</p>
          <p>{entry.description}</p>
          {entry && entry.photo && <img src={entry.photo} alt={entry.destination} width="300" height= '100' />}
        </div>
      ))}
    </div>
  );
};

export default TravelEntries;
