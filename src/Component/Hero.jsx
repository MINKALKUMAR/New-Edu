import React from 'react';
import MainLogo from '../assets/Logo/MainLogo2.png';
import BgVideo from '../assets/BgVideo.mp4';
import '../App.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <video
          className="hero-video"
          src={BgVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>

      <div className="hero-overlay">
        <img src={MainLogo} alt="Event Logo" className="hero-logo" />
        <div className="hero-meta">
          <h1 className="hero-title" style={{fontSize:'2.3rem',marginTop:"-1rem"}}>Reimagining Learning in the Age of AI</h1>
          <span className="meta-item">
            📅 December 19th, 2025 <span className="dot" /> 📍Holiday Inn, Mayur Vihar, New Delhi
          </span>
        </div>
        <div className="hero-buttons">
          <a href="/registration" className="hero-cta">DELEGATE REGISTRATION</a>
          <a href="/SponsorshipQuery" className="hero-ctb">EXPRESS INTEREST</a>
        </div>
      </div>
    </section>
  );
}
