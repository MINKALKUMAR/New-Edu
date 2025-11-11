import React from 'react';
export default function PastGlimpses() {
const images = [
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A1.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A2.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A3.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A4.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A5.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A6.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A7.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A8.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A9.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A10.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A11.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A12.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A13.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A14.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A15.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A16.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A17.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A18.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A19.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A22.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A23.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A24.JPG?updatedAt=1761064290238",
  "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A25.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A26.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A27.JPG?updatedAt=1761064290238",
  // "https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A28.JPG?updatedAt=1761064290238"
];


  const styles = {
    section: {
      backgroundColor: '#0b1f3d',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
    },
    title: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      letterSpacing: '1px',
      marginBottom: '28px',
    },
    lanes: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '18px',
    },
    lane: {
      position: 'relative',
      width: '100%',
      height: '68vh',
      overflow: 'hidden',
      borderRadius: '14px',
      background: 'rgba(255,255,255,0.02)',
    },
    track: (duration, dir) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: 'max-content',
      animation: `${dir === 'up' ? 'scrollUp' : 'scrollDown'} ${duration}s linear infinite`,
    }),
    imageWrap: {
      width: '100%',
      height: '220px',
      marginBottom: '14px',
      borderRadius: '12px',
      overflow: 'hidden',
      background: '#12305c',
      boxShadow: '0 8px 22px rgba(0,0,0,0.35)',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(1.05) contrast(1.02)',
    },
    gradientTop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '120px',
      background: 'linear-gradient(180deg, #0b1f3d 0%, rgba(11,31,61,0) 100%)',
      pointerEvents: 'none',
      zIndex: 2,
    },
    gradientBottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '120px',
      background: 'linear-gradient(0deg, #0b1f3d 0%, rgba(11,31,61,0) 100%)',
      pointerEvents: 'none',
      zIndex: 2,
    },
    styleTag: `
      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes scrollDown {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
      @media (max-width: 1024px) {
        .pgv-img { height: 190px !important; }
        .pgv-lane { height: 60vh !important; }
      }
      @media (max-width: 768px) {
        .pgv-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .pgv-img { height: 170px !important; }
        .pgv-lane { height: 56vh !important; }
      }
      @media (max-width: 520px) {
        .pgv-grid { grid-template-columns: 1fr !important; }
        .pgv-img { height: 160px !important; }
        .pgv-lane { height: 52vh !important; }
      }
    `,
  };

  const Lane = ({ direction = 'up', duration = 40, offset = 0 }) => {
    const rotated = [...images.slice(offset), ...images.slice(0, offset)];
    const doubled = [...rotated, ...rotated];

    return (
      <div className="pgv-lane" style={styles.lane}>
        <div style={styles.gradientTop} />
        <div style={styles.gradientBottom} />
        <div style={styles.track(duration, direction)}>
          {doubled.map((src, idx) => (
            <div key={`${direction}-${offset}-${idx}`} className="pgv-img" style={styles.imageWrap}>
              <img src={src} alt={`Past glimpse ${idx + 1}`} style={styles.img} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="section7" aria-label="Past Glimpses" style={styles.section}>
      <style dangerouslySetInnerHTML={{ __html: styles.styleTag }} />
      <div style={styles.container}>
        <h2 style={styles.title}>Past Glimpses</h2>
        <div className="pgv-grid" style={styles.lanes}>
          <Lane direction="up" duration={55} offset={0} />
          <Lane direction="down" duration={65} offset={3} />
          <Lane direction="up" duration={66} offset={6} />
          <Lane direction="down" duration={54} offset={9} />
        </div>
      </div>
    </section>
  );
}
