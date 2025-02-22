import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput/GuessInput';
import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function App() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuess(word) {
    const newGuess = {
      word
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (word.toUpperCase() === answer.toUpperCase()) {
      setGameStatus('won');
      return;
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  // Add restart game function
  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
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
          gameStatus={gameStatus}
        />

        {gameStatus === 'won' && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
            <button onClick={handleRestart} className="button">
              Play Again
            </button>
          </div>
        )}
        
        {gameStatus === 'lost' && (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            <button onClick={handleRestart} className="button">
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;