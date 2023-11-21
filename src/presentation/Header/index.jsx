import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card } from '../Card';
import './header.scss';
import Logo from './images/kl_app_logo_header.png';
import ErrorImg from './images/kl_app_icon_404.png';
import { Main } from '../Main';

function Header() {
  return (
    <Router>
      <header className="navbar">
        <Link to="/">
          <img src={Logo} alt="logotype" className="header-logo" />
        </Link>

        <Link to="/game" className="nav-item">
          Карточки
        </Link>
        <a className="nav-item" href="">
          Войти
        </a>
        <a className="nav-item" href="">
          Регистрация
        </a>

        <Link to="/about" className="nav-item">
          О нас
        </Link>
      </header>
      <Routes>
        <Route path="/game" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
function About() {
  return (
    <div>
      <h2>О проекте Kennen? Lernen!</h2>
      <p>
        Всем привет! Меня зовут Борисова Надежда. Я учусь на
        frontend-разработчика в школе IT Girls и это мой сайт по изучению
        немецких слов. Я учила немецкий 15 лет и хотела бы показать всем, что
        обучение иностранному языку может быть легким и креативным. Попробуйте
        учить слова с помощью мемо-карточек, или общим списком. Удачи!
      </p>
      <h2>Как учить?</h2>
      <h5>
        Новые слова лучше всего учить наиболее подходящим именно вам способом.
        Но как узнать, что же это за способ? Просто испробуйте разные варианты:
        Вы можете придумать любой критерий, по которому сможете образовывать
        словарные группы и с удовольствием их учить.{' '}
      </h5>
      <ul>
        <li>учите слова группами по частям речи;</li>
        <li>учите слова по тематическим группам;</li>
        <li>учите слова по цепочке, основанной на своих ассоциациях;</li>
        <li>учите слова по группам с одинаковым родом;</li>
        <li>учите слова, которые начинаются с одной буквы;</li>
      </ul>
      <h5>
        Учите слова, которые вас окружают и которые вы используете, как правило,
        и на родном языке в повседневной жизни.
      </h5>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="error-page">
      <h1>Ошибка 404</h1>
      <p>
        Упс! Такой странички нет. Скорее всего URL, по которому вы пришли,
        неверный и здесь никогда ничего не было, если же вы уверены в обратном,
        напишите нам на адрес службы поддержки{' '}
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

export { Header };
