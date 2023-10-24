import React from 'react';
import './header.scss';
import Logo from './images/kl_app_logo_header.png';
import LogIn from './images/kp_app_icon_login.png';

function Header() {
  return (
    <header className="navbar">
      <img src={Logo} alt="logotype" className="header-logo" />
      <a className="nav-item" href="">
        <img src={LogIn} alt="login_icon" className="header-icon" />
        Log In
      </a>
      <a className="nav-item" href="">
        Sign Up
      </a>
      <a className="nav-item" href="">
        About
      </a>
    </header>
  );
}

export { Header };
