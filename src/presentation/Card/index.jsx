import React, { useState } from 'react';
import { words } from '../components/wordlist';
import { Icons } from '../Main/components/Icons';
import './card.scss';

function Card() {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };

  // useEffect(() => {
  //   setPressed(false);
  // }, [words.id]);

  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].german;

  const [count, setCount] = useState(0);
  const [wordlist] = useState([...words].sort(() => Math.random() - 0.5));

  function showPrev() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function showNext() {
    if (count < wordlist.length - 1) {
      setCount(count + 1);
    }
  }

  return (
    <div className="app">
      <h1> Карточки</h1>
      <div className="card-container">
        <button className="prevcard" onClick={showPrev}>
          <Icons name="chevron-left" color="#fff" size="22" />
        </button>
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
        <button className="nextcard" onClick={showNext}>
          <Icons name="chevron-right" color="#fff" size="22" />
        </button>
      </div>
    </div>
  );
}

export { Card };
