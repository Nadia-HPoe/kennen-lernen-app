import React from 'react';
import './footer.scss';
import FooterLogo from './images/kl_app_icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div>
        Kennen? Lernen!
        <img src={FooterLogo} alt="smalllogotype" className="footer-logo" />
      </div>
      <p className="footer-text">
        All Rights Reserved<span>&copy;</span> 2023
      </p>
    </footer>
  );
}

export { Footer };
