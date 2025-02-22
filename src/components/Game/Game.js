import React from 'react';

function Game({ handleGuess, answer, gameStatus }) {
  const [word, setWord] = React.useState("");

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(word);
        setWord('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        pattern="[A-Z]{5}"
        value={word}
        onChange={event => {
          setWord((event.target.value.toUpperCase()));
        }}
        disabled={gameStatus !== 'running'} 
      />
    </form>
  );
}

export default Game;