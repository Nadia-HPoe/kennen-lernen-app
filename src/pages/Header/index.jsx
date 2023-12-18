import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import './header.scss';
import Logo from './images/kl_app_logo_header.png';
import { Main } from '../Main';
import { SignUpForm } from '../Signup';
import { NoMatch } from '../NoMatch';
import { About } from '../About';
import { newCardlist } from '../Main/newCardlist';

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
        <Link to="/english" className="nav-item">
          Слова на английском
        </Link>
        <a className="nav-item" href="">
          Войти
        </a>
        <Link to="/signup" className="nav-item">
          Регистрация
        </Link>

        <Link to="/about" className="nav-item">
          О нас
        </Link>
      </header>
      <Routes>
        <Route path="/game" element={<Card />} />
        <Route path="/english" element={<newCardlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export { Header };
