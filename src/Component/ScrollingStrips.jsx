import React from 'react';
import '../App.css';
function StatCard({ title, subtitle }) {
  return (
    <div className="strip-item strip-card" aria-label={subtitle || title}>
      <div className="strip-card-inner">
        <div className="strip-card-title">{title}</div>
        {subtitle && <div className="strip-card-sub">{subtitle}</div>}
      </div>
    </div>
  );
}

export default function ScrollingStrips({
  title = 'Event Highlights',
  firstStrip = [
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A3.JPG?updatedAt=1761064290238' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A5.JPG?updatedAt=1761064290238' },
    { type: 'content', title: '200+', subtitle: 'Delegates' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A8.JPG?updatedAt=1761064290238' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A10.JPG?updatedAt=1761064290238' },
    { type: 'content', title: '35+', subtitle: 'Speakers' },
  ],
  secondStrip = [
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A11.JPG?updatedAt=1761064290238' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A12.JPG?updatedAt=1761064290238' },
    { type: 'content', title: '20+', subtitle: 'Exhibitor' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A20.JPG?updatedAt=1761064290238' },
    { type: 'image', url: 'https://ik.imagekit.io/minkal/priyansh/past%20low%20quality/A21.JPG?updatedAt=1761064290238' },
    { type: 'content', title: '9+', subtitle: 'Hours of Exclusive Networking' },
      
  ],
  itemHeight = 160,
  gap = 14,
  speedFirst = 45,
  speedSecond = 55,
}) {
  // Duplicate content to create a seamless loop
  const buildLoop = (base) => {
    const safe = (base || []).filter(Boolean);
    const out = [];
    while (out.length < Math.max(24, safe.length * 6)) {
      out.push(...safe);
    }
    return out;
  };

  const seqA = buildLoop(firstStrip);
  const seqB = buildLoop(secondStrip);

  return (
    <section id="gallery-strips" className="strip-section" aria-label="Scrolling photo highlights">
      <div className="strip-mask">
        {/* STRIP A (left to right) */}
        <div className="strip-row">
          <div
            className="strip-track leftToRight"
            style={{
              '--h': `${itemHeight}px`,
              '--gap': `${gap}px`,
              '--speed': `${speedFirst}s`,
            }}
          >
            {seqA.map((item, i) => (
              item.type === 'image' ? (
                <div className="strip-item" key={`a-img-${i}`}>
                  <img src={item.url} alt="highlight" loading="lazy" />
                </div>
              ) : (
                <StatCard key={`a-card-${i}`} title={item.title} subtitle={item.subtitle} />
              )
            ))}
          </div>
        </div>

        {/* STRIP B (right to left) */}
        <div className="strip-row">
          <div
            className="strip-track rightToLeft"
            style={{
              '--h': `${itemHeight}px`,
              '--gap': `${gap}px`,
              '--speed': `${speedSecond}s`,
            }}
          >
            {seqB.map((item, i) => (
              item.type === 'image' ? (
                <div className="strip-item" key={`b-img-${i}`}>
                  <img src={item.url} alt="highlight" loading="lazy" />
                </div>
              ) : (
                <StatCard key={`b-card-${i}`} title={item.title} subtitle={item.subtitle} />
              )
            ))}
          </div>
        </div>
      </div>

      {/* CENTER HEADING */}
      <div className="strip-center">
        <h3 style={{textAlign:'center'}}>{title}</h3>
      </div>
    </section>
  );
}
