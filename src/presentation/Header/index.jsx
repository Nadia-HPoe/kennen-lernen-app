import React from 'react';
import './header.scss';
import Logo from './images/kl_app_logo_header.png';

function Header() {
  return (
    <header className="navbar">
      <img src={Logo} alt="logotype" className="header-logo" />
      <button>Log In</button>
      <button>Sign Up</button>
      <button>About</button>
    </header>
  );
}

export { Header };
