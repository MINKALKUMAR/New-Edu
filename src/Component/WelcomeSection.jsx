import React from 'react';
import '../App.css';

export default function WelcomeSection() {
  return (
    <section id="about" className="welcome-section">
      <div className="welcome-bg" aria-hidden="true">
        <div className="animated-bg">
          <span className="orb orb-a" />
          <span className="orb orb-b" />
          <span className="orb orb-c" />
          <span className="ring ring-primary" />
          <span className="ring ring-secondary" />
        </div>
      </div>

      <div className="welcome-container">
        <div className="welcome-card">
          <h2 className="welcome-title">
          
          <span className="accent">Education Tomorrow Conclave & Awards 2025</span>
          </h2>

          <div className="welcome-body">
            <p>
             The Education Tomorrow Conclave & Awards 2025, scheduled for December in New Delhi, will bring together visionary leaders from academia, industry, and government to reimagine the future of learning in an AI-driven world.
            </p>
            <p>
             With the theme “Reimagining Learning in the Age of AI,” the conclave will explore how artificial intelligence is revolutionizing education — from intelligent classrooms and adaptive learning systems to AI-powered curriculum design and future-ready skills development.</p>
            <p>
            This landmark event will highlight transformative innovations that empower educators, institutions, and learners to thrive in the digital era. Designed as a collaborative platform, the conclave will feature distinguished thought leaders, policymakers, HR and L&D professionals, and education pioneers — fostering dialogue, partnerships, and strategies that bridge the gap between academia and industry for a smarter, more inclusive tomorrow.
            </p>
          </div>

          <a href="#interest" className="welcome-cta">About Education Tomorrow</a>
        </div>
      </div>
    </section>
  );
}
