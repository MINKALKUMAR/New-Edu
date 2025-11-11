import React from 'react';

// ✅ Import all partner logos from src/assets/partners
import Fintrex from '../assets/partners/Fintrex.png';
import Educore from '../assets/partners/Educore.png';
import WULogoWhite from '../assets/partners/WULogoWhite.png';
import LINGAYA from '../assets/partners/LINGAYA.png';
import EducationFutureOne from '../assets/partners/Education_Future_One.png';
import ICTAcademy from '../assets/partners/ictacademy.png';
import KHASRAPAT from '../assets/partners/KHASRAPAT.png';

export default function Partners() {
  const partners = [
    { name: "Organiser", logo: Fintrex, link: "https://fintrexmedia.com/" },
    { name: "Knowledge Partner", logo: Educore, link: "#" },
    { name: "Presenting Partner", logo: WULogoWhite, link: "#" },
    { name: "University Partner", logo: LINGAYA, link: "#" },
    { name: "Networking Partner", logo: EducationFutureOne, link: "#" },
    { name: "Skilling Partner", logo: ICTAcademy, link: "#" },
    { name: "News Partner", logo: KHASRAPAT, link: "#" }
  ];

  const styles = {
    section: {
      padding: '60px 0',
      backgroundColor: '#0b1f3d',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    title: {
      fontSize: '50px',
          fontWeight: '700',
          color: 'white',
          marginBottom: '10px',
          textAlign: 'center',
    },
    slider: {
      display: 'flex',
      overflow: 'hidden',
    },
    track: {
      display: 'flex',
      animation: 'scroll 40s linear infinite',
      gap: '30px',
    },
    card: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      minWidth: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: '60px',
      objectFit: 'contain',
      transition: 'opacity 0.3s',
    },
    styleTag: `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7)); }
      }
      .partner-card:hover img {
        opacity: 1;
      }
    `
  };

  return (
    <section id='past-partners' className='past-partners' style={styles.section}>
      <style>{styles.styleTag}</style>
      <div style={styles.container}>
        <h2 style={styles.title}>Past Partners</h2>
        <div style={styles.slider}>
          <div style={styles.track}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={index}  style={styles.card}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img src={partner.logo} alt={partner.name} style={styles.image} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
