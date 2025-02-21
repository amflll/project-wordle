import React from 'react';

function Guesses({ guess }) {
  return (
  <div>
      {guess.map(({ id, word }) => (
            <p className="guess" key={id}>{word}</p>
          ))}
  </div>
)}

export default Guesses;
