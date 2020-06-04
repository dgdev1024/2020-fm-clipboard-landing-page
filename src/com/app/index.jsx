/**
 * @file com/app/index.jsx
 * The app's primary component.
 */

// Imports
import React from 'react';
import HeroSection from '../hero-section';
import FeaturesSection from '../features-section';
import Footer from '../footer';
import './index.scss';

// Component
const App = () => (
  <main>
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </main>
);

// Export
export default App;
