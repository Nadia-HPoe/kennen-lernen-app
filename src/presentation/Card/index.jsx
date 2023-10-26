import React from 'react';
import { words } from '../components/wordlist';
import './card.scss';

function Card() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].german;

  return (
    <div>
      <h1> Слово дня</h1>
      <div className="card-body">
        <div className="card-text">{randomWord}</div>
        <button className="card-button">Показать перевод</button>
        <p>{words[randomIndex].russian}</p>
      </div>
    </div>
  );
}

export { Card };
