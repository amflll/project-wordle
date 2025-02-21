import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ handleGuess }) {
  const [word, setWord] = React.useState([]);

  return <>
  <form 
    className="guess-input-wrapper"
    onSubmit={(event) => {
      event.preventDefault();
      handleGuess(word);
      console.log(word);
      setWord('');
    }}
    >
    <label for="guess-input">Enter guess:</label>
  <input 
    id="guess-input" 
    type="text" 
    pattern="[A-Z]{5}" //pattern attribute, 5 characters and must be uppercase 
    value={word}
          onChange={event => {
            setWord((event.target.value).toUpperCase());
          }}
    />
</form>
  </>;
}

export default Game;
