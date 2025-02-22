import React from 'react';

function Game({ handleGuess, answer }) {
  const [word, setWord] = React.useState("");

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(word);
        console.log(word);
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
      />
    </form>
  );
}

export default Game;