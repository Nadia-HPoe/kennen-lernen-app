import React from 'react';
import './footer.scss';
import FooterLogo from './images/kl_app_icon.png';

function Footer() {
  return (
    <footer className="footer">
      Kennen? Lernen!
      <img src={FooterLogo} alt="smalllogotype" />
      <p className="footer-text">
        All Rights Reserved<span>&copy;</span> 2023
      </p>
    </footer>
  );
}

export { Footer };
