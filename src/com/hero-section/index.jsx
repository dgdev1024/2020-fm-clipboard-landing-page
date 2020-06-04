/**
 * @file com/hero-section/index.jsx
 * Presents the intro section.
 */

// Imports
import React from 'react';
import Logo from '../../img/logo.svg';
import './index.scss';

// Component
const HeroSection = () => (
  <section className="fm-hero-section">
    <div className="container">
      <Logo />
      <div className="fm-caption">
        <h1>
          A history of everything you copy
        </h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="fm-call-to-action">
        <button className="fm-download-ios">Download for iOS</button>
        <button className="fm-download-mac">Download for Mac</button>
      </div>
    </div>
  </section>
);

// Export
export default HeroSection;
