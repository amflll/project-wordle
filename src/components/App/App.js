import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput/GuessInput';
import React from 'react';

function App() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(word) {
    const newGuess = {
      word
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GuessInput guess={guesses} />
        <Game handleGuess={handleGuess} />
      </div>
    </div>
  );
}

export default App;