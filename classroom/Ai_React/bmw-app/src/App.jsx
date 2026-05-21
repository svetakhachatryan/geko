import React from 'react';
import './Hero.css';
import bgImage from './assets/my-bg.png';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Ֆոնային նկար */}
      <div className="hero-bg">
        <img src={bgImage} alt="BMW M5 Background" />        
        <div className="hero-overlay" />
      </div>

      {/* Նավիգացիա */}
      <nav className="navbar">
        <div className="logo-m">M</div>

        <div className="nav-links">
          <a href="#exterior">Exterior</a>
          <a href="#interior">Interior</a>
          <a href="#technology">Technology</a>
          <a href="#models">Models</a>
        </div>

        <button className="btn-configure">Configure</button>
      </nav>

      {/* Գլխավոր տեքստային հատված */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <p className="hero-subtitle">The New Generation</p>
          <h1 className="hero-title">BMW M5</h1>
          <p className="hero-description">
            617 hp of pure M performance. Electrified. Uncompromised.
          </p>

          <div className="cta-buttons">
            <button className="btn-discover">Discover Now</button>
            <button className="btn-testdrive">Test Drive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;