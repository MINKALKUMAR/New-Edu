import React, { useEffect, useRef, useState } from 'react';
import Earth from '../assets/AwardLogo2.png';

export default function WhoShouldAttend({
  imageUrl = Earth,
  items = [
    'Bridge education and industry gaps.',
    'Education Leaders & Policymakers – shaping the future of skilling and workforce development.',
    'HR & L&D Professionals – driving upskilling, reskilling, and talent transformation.',
    'Corporate Leaders & CXOs – seeking skilled talent to fuel growth.',
    'Training Partners & EdTech – enabling scalable, outcome-led learning.'
  ],
}) {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Inline styles with responsive improvements
  const styles = {
    section: {
      minHeight: '50vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 32px)',
      background: 'linear-gradient(135deg, rgba(14,39,77,0.15), rgba(45,88,216,0.12))'
    },
    inner: {
      position: 'relative',
      zIndex: 1,
      width: 'min(1200px, 94vw)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 'clamp(24px, 4vw, 48px)',
      alignItems: 'center'
    },
    content: {
      flex: '1.1',
      width: '100%',
      order: 0, // Always keep content first
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    leftTitle: {
      margin: 0,
      fontWeight: 900,
      fontSize: 'clamp(28px, 5vw, 42px)',
      color: '#eaf5ff',
      textAlign: isMobile ? 'center' : 'left',
      lineHeight: 1.2
    },
    leftSub: {
      margin: 'clamp(12px, 2vw, 16px) 0',
      color: '#cfe6ff',
      fontSize: 'clamp(16px, 2vw, 18px)',
      textAlign: isMobile ? 'center' : 'left',
      lineHeight: 1.4
    },
    list: {
      display: 'grid',
      gap: 'clamp(12px, 2vw, 16px)'
    },
    item: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'start',
      gap: 'clamp(12px, 2vw, 16px)',
      padding: 'clamp(12px, 2vw, 16px)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      background: 'rgba(11,31,61,0.35)',
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: '0 8px 22px rgba(0,0,0,0.25)'
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#4fc6ff',
      marginTop: isMobile ? 4 : 7,
      boxShadow: '0 0 0 2px rgba(79,198,255,0.25)',
      flexShrink: 0
    },
    text: {
      color: '#d8e9ff',
      fontSize: 'clamp(14px, 1.8vw, 16px)',
      lineHeight: 1.6
    },
    imageWrapper: {
      flex: '1',
      width: '100%',
      position: 'relative',
      minHeight: isMobile ? '200px' : '300px',
      marginTop: isMobile ? '20px' : '160px',
    },
    right: {
      position: 'relative',
      minHeight: isMobile ? '300px' : '400px',
      marginTop: isMobile ? '0' : '160px',
      order: isMobile ? -1 : 0
    },
    visual: {
      position: 'absolute',
      inset: 0,
      borderRadius: '16px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'saturate(0.95) contrast(1.05)',
      transform: isMobile ? 'none' : 'translateY(calc(var(--parallax, 0px) * -1))',
    },
    // new: inner animated layer (performs the up/down float)
    float: {
      position: 'absolute',
      inset: 0,
      borderRadius: '16px',
      backgroundSize: 'inherit',
      backgroundPosition: 'inherit',
      backgroundRepeat: 'inherit',
      transition: 'transform 0.3s ease',
      animation: 'floatY 6s ease-in-out infinite',
      willChange: 'transform',
    },
    styleTag: `
      @keyframes floatY {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-18px); }
        100% { transform: translateY(0px); }
      }
    `
  };

  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile for better performance
    
    const root = sectionRef.current;
    if (!root) return;
    
    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, 1 - rect.top / vh));
      root.style.setProperty('--parallax', (progress * 40).toFixed(2) + 'px');
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  return (
    <section id="who-should-attend" ref={sectionRef} style={styles.section}>
      <style>{styles.styleTag}</style>
      <div style={styles.inner}>
        <div style={styles.content}>
          <h2 style={styles.leftTitle}>Who Should Attend?</h2>
          <p style={styles.leftSub}>
            Join leaders shaping skilling, employability, and digital transformation.
          </p>
          <div style={styles.list}>
            {items.map((t, i) => (
              <div key={i} style={styles.item}>
                <span style={styles.dot} />
                <span style={styles.text}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.imageWrapper}>
          {/* Outer container keeps parallax transform; inner .float does smooth up/down */}
          <div style={styles.visual}>
            <div
              style={{
                ...styles.float,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: isMobile ? 'cover' : 'contain'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}