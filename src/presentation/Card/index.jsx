import React, { useState } from 'react';
import { words } from '../components/wordlist';
import './card.scss';

function Card() {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].german;

  return (
    <div>
      <h1> Слово дня</h1>
      <div className="card-body">
        <div className="card-text">{randomWord}</div>
        <div className="card-wrapper">
          <button
            className={'card-button ' + (pressed ? 'hidden' : '')}
            onClick={handleChange}
          >
            Показать перевод
          </button>
          <p className={'card-translation ' + (pressed ? '' : 'hidden')}>
            {words[randomIndex].russian}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Card };
