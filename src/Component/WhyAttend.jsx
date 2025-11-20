import React, { useEffect, useRef } from 'react';
import '../App.css';

export default function WhyAttend() {
  const sectionRef = useRef(null);
  const mouseX = useRef(0);

  // Scroll-trigger reveal using IntersectionObserver
  useEffect(() => {
    const rootEl = sectionRef.current;
    if (!rootEl) return;

    const elements = rootEl.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mouse-based shine effect on cards
  useEffect(() => {
    const rootEl = sectionRef.current;
    if (!rootEl) return;
    const handler = (e) => {
      mouseX.current = e.clientX;
      rootEl.style.setProperty('--mx', `${mouseX.current}px`);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const items = [
    {
      img: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop',
      title: 'Policy Makers',
      text: 'Engage with national and state leaders driving skill development.'
    },
    {
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
      title: 'Industry Connect',
      text: 'Network with enterprises to align education with jobs.'
    },
    {
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
      title: 'Institution Leaders',
      text: 'Discover models to scale skilling and employability.'
    },
    {
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop',
      title: 'Technology & EdTech',
      text: 'Explore platforms, credentials, and immersive learning.'
    },
    {
      img: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80&w=1600&auto=format&fit=crop',
      title: 'Employers & HR',
      text: 'Find future-ready talent and upskilling pathways.'
    },
    {
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
      title: 'Startups & Innovators',
      text: 'Showcase solutions and partner with institutions.'
    },
    {
      img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop',
      title: 'Trainers & Mentors',
      text: 'Adopt modern pedagogy and micro-credentialing.'
    },
    {
      img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
      title: 'Students & Youth',
      text: 'Discover career pathways and new-age skills.'
    },
  ];

  return (
    <section id="why-attend" className="why-attend-section" ref={sectionRef}>
      {/* Subtle grid/accents background */}
      <div className="wa-bg">
        <div className="grid-lines" />
      </div>

      <div className="wa-inner">
        <header className="wa-header reveal">
          <span className="wa-pill">Why Attend</span>
          <h2 className="wa-title">Skilling. Employability. Impact.</h2>
          <p className="wa-sub">
            Cards with immersive images and concise overlays highlight key reasons to be there.
          </p>
        </header>

        <div className="wa-grid">
          {items.map((it, idx) => (
            <article key={idx} className="wa-card reveal" style={{ transitionDelay: `${idx * 70}ms` }}>
              <img
                className="wa-card-bg"
                src={it.img.replace("w=1600", "w=600")}
                alt={it.title}
                loading="lazy"
                decoding="async"
                width="400"
                height="250"
              />

              <div className="wa-card-gradient" />
              <div className="wa-card-overlay">
                <h3 className="wa-card-title">{it.title}</h3>
                <p className="wa-card-text">{it.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wa-cta-row reveal" style={{ transitionDelay: '560ms' }}>
          <a href="#interest" className="wa-cta">Express Your Interest</a>
        </div>
      </div>
    </section>
  );
}

