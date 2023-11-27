import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card } from '../Card';
import './header.scss';
import Logo from './images/kl_app_logo_header.png';
import { Main } from '../Main';
import { NoMatch } from '../Main/components/NoMatch';
import { About } from '../Main/About';

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

export { Header };
