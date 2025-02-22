import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput/GuessInput';
import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer] = React.useState(() => sample(WORDS));
  
  console.info({ answer });

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
        <GuessInput 
          guesses={guesses}
          answer={answer}
        />
        <Game 
          handleGuess={handleGuess}
          answer={answer}
        />
      </div>
    </div>
  );
}

export default App;