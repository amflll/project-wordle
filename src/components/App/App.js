import Game from '../Game';
import Header from '../Header';
import Guesses from '../Guesses/Guesses';

import React from 'react';

function App() {
  const [guess, setGuess] = React.useState([]);

  function handleGuess(word) {
    const newGuess = {
      word,
      id: Math.random(),
    };

    const nextGuess = [...guess, newGuess];
    setGuess(nextGuess);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Guesses 
          guess={guess}/>
        <Game 
          handleGuess={handleGuess} />
      </div>
    </div>
  );
}

export default App;
