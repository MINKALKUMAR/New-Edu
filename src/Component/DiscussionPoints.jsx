import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

export default function DiscussionPoints() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const sectionRef = useRef(null);

  const points = [
    {
      title: 'EdTech Innovation',
      description:
        'Integrating IoT in Smart Campuses and Incorporating Digital Twins in Higher Education',
      icon: '🚀',
      tone: 'blueA',
    },
    {
      title: 'Digital Transformation',
      description:
        'Role of AI, VR & AR in Harnessing Transformative Learning in Higher Education',
      icon: '🌐',
      tone: 'blueB',
    },
    {
      title: 'Inclusive Education',
      description:
        'Role of evolving Online Learning Platforms in embracing Inclusivity & Personalized Learning Paths',
      icon: '🌍',
      tone: 'tealBlue',
    },
    {
      title: 'Cybersecurity in HE',
      description:
        'Securing Sensitive Data, Ensuring Safety, and Examining Ethical Considerations of New Technologies',
      icon: '🔐',
      tone: 'indigo',
    },
    {
      title: 'Immersive Tech',
      description: 'Enhancing Learning with AI, AR, and VR in Classrooms',
      icon: '👓',
      tone: 'sky',
    },
    {
      title: 'Entrepreneurial Mindsets',
      description: 'Role of Technology and Blockchain in Fostering Innovation and Creativity',
      icon: '💎',
      tone: 'purpleIndigo',
    },
    {
      title: 'Digital Literacy',
      description: 'Navigating the Digital Age in Education',
      icon: '📱',
      tone: 'cyanBlue',
    },
    {
      title: 'Future of Work',
      description:
        'Career Evolution, Digital Credentials and Skill Enhancement to create a Future-Ready Workforce',
      icon: '🚀',
      tone: 'blueIndigo',
    },
  ];

  const handleCardHover = (index) => setFlippedIndex(index);
  const handleCardLeave = () => setFlippedIndex(null);

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

  return (
    <section id="discussion-points" className="discussion-section" ref={sectionRef}>
      <div className="discussion-inner">
        <header className="discussion-header reveal">
          <h2 className="discussion-title">Key Discussion Points</h2>
          <div className="discussion-underline" />
        </header>

        <div className="dp-grid">
          {points.map((point, index) => (
            <div
              key={index}
              className="dp-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div className={`dp-inner ${flippedIndex === index ? 'is-flipped' : ''}`}>
                <div className="dp-front">
                  <div className="dp-badge">
                    <span className="dp-emoji" aria-hidden>
                      {point.icon}
                    </span>
                  </div>
                  <h3 className="dp-heading">{point.title}</h3>
                </div>

                <div className={`dp-back tone-${point.tone}`}>
                  <p className="dp-text">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
