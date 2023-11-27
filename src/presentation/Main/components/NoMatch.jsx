import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../Header/images/kl_app_icon_404.png';

function NoMatch() {
  return (
    <div className="error-page">
      <h1>Ошибка 404</h1>
      <p>
        Упс! Такой странички нет. Скорее всего URL, по которому вы пришли,
        неверный и здесь никогда ничего не было.
      </p>{' '}
      <p>
        Eсли же вы уверены в обратном, напишите нам на адрес службы поддержки{' '}
        <a href="mailto:kl-app@support.com" className="contact_link">
          kl-app@support.com
        </a>
      </p>
      <img src={ErrorImg} alt="ошибка 404" className="error-image" />
      <p>
        Попробуйте начать заново{' '}
        <Link to="/" className="contact_link">
          с главной страницы
        </Link>
      </p>
    </div>
  );
}

export { NoMatch };
