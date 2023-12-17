import React, { useState, useRef, useEffect } from 'react';
import { words } from '../wordlist';
import { Icons } from '../icons/Icons';
import './card.scss';

function Card() {
  const ref = useRef();

  const [pressed, setPressed] = useState(false);
  const [learned, setLearned] = useState(0);
  const [count, setCount] = useState(0);
  const [wordlist] = useState([...words].sort(() => Math.random() - 0.5));

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [count]);

  const handleChange = () => {
    setPressed(!pressed);
    if (learned < wordlist.length - 1) {
      setLearned(learned + 1);
    }
  };

  function showPrev() {
    if (count !== 0) {
      setCount(count - 1);
      setPressed(false);
    }
  }

  function showNext() {
    if (count < wordlist.length - 1) {
      setCount(count + 1);
      setPressed(false);
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
          <div className="card-text">{wordlist[count].german}</div>
          <div className="card-wrapper">
            <button
              ref={ref}
              className={'card-button ' + (pressed ? 'hidden' : '')}
              onClick={handleChange}
            >
              Показать перевод
            </button>
            <p className={'card-translation ' + (pressed ? '' : 'hidden')}>
              {wordlist[count].russian}
            </p>
          </div>
          <p className="card-counttext">Изучено слов:{learned}</p>
        </div>
        <button className="nextcard" onClick={showNext}>
          <Icons name="chevron-right" color="#fff" size="22" />
        </button>
      </div>
    </div>
  );
}

export { Card };
