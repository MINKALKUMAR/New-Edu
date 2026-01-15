import React from 'react';
export default function ConnectWithUs() {
  const items = [
    {
      title: 'Sponsorship & Exhibition',
      contact: 'Priyansh Saharawat',
      email: 'priyansh@fintrexmedia.com',
      phone: '7011499056',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Speaking & Award Nomination',
      contact: 'Priyanshi Chaudhary',
      email: 'priyanshi@fintrexmedia.com',
      phone: '8755676010',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Delegate Opportunity',
      contact: 'Basant Sharma',
      email: 'basant@fintrexmedia.com',
      phone: '75050 24107',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="connect" className="connect-section" aria-label="Connect with Us">
      <div className="connect-inner">
        <div className="connect-header">
          <span className="connect-pill">Get in Touch</span>
          <h2 className="connect-title">Connect With Our Team</h2>
          <p className="connect-sub">Reach out to us for any queries or opportunities</p>
        </div>

        <div className="connect-grid">
          {items.map((item, idx) => (
            <div key={idx} className="connect-card">
              <div className="connect-card-inner">
                <div className="connect-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="connect-card-title">{item.title}</h3>
                <div className="connect-card-content">
                  <p className="connect-card-name">{item.contact}</p>
                  <a href={`mailto:${item.email}`} className="connect-card-email">
                    {item.email}
                  </a>
                  <a href={`tel:${item.phone}`} className="connect-card-phone">
                    {item.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
