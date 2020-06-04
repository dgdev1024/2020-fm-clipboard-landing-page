/**
 * @file com/footer/index.jsx
 */

// Imports
import React from 'react';
import Logo from '../../img/logo.svg';
import FacebookIcon from '../../img/icon-facebook.svg';
import TwitterIcon from '../../img/icon-twitter.svg';
import InstagramIcon from '../../img/icon-instagram.svg';
import './index.scss';

// Component
const Footer = () => (
  <footer>
    <div className="container">
      <div className="fm-logo">
        <Logo 
          viewBox="0 0 125 125"
        />
      </div>
      <nav>
        <div>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Press Kit</a>
        </div>
        <div>
          <a href="#">Install Guide</a>
        </div>
      </nav>
      <div className="fm-social-links">
        <a id="facebook" href="#"><FacebookIcon /></a>
        <a id="twitter" href="#"><TwitterIcon /></a>
        <a id="instagram" href="#"><InstagramIcon /></a>
      </div>
    </div>
  </footer>
);

// Export
export default Footer;
