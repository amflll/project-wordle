import React from 'react';

function Guesses({ guess }) {
  return (
  <div class="guess-results">
      {guess.map(({ id, word }) => (
            <p className="guess" key={id}>{word}</p>
          ))}
  </div>
)}

export default Guesses;
