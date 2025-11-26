import React, { useState } from "react";
import heroImg from "../assets/Awards.jpg";
import eLogo from "../assets/AwardLogo2.png";

const Awards = () => {
  const [copied, setCopied] = useState(false);

  const HeroSection = () => {
    return (
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Awards hero section"
      >
        <div className="hero-content">
          {/* <div className="hero-text">
            <h1 className="hero-title">Education Tomorrow Conclave & Awards 2025</h1>
            <p className="hero-subtitle">Celebrating Excellence in Education Innovation</p>
            <a className="hero-cta" href="/Nominate">Nominate Now</a>
          </div> */}
        </div>
      </section>
    );
  };

  const AboutAwards = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About The Awards</h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text">
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.25rem", color: "#b0c4de" }}>
              The Education Tomorrow Conclave & Awards 2025 is a prestigious platform dedicated to recognizing and
              celebrating the trailblazers who are shaping the future of education.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.25rem", color: "#b0c4de" }}>
              This exclusive gathering will honor visionary educators, pioneering institutions, and changemakers whose
              innovation, leadership, and commitment have transformed the learning ecosystem.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#b0c4de" }}>
              Join us in celebrating excellence and innovation in education at the most anticipated education awards
              ceremony of the year.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="award-trophy">
              <img src={eLogo} style={{ marginTop: "-2.5rem" }} height={"100%"} width={"100%"} alt="Award Trophy" />
              {/* <p style={{ color: "var(--accent)", fontSize: "1.1rem", fontWeight: 700 }}>Award Trophy</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ImportantDates = () => {
    const dates = [
      { title: "Last Date for Nomination", date: "07th December 2025", highlight: true },
      { title: "Extended Deadline", date: "10th December 2025" },
      { title: "Shortlist Announcement", date: "14th December 2025" },
      { title: "Winner Announcement & Felicitation", date: "19th December 2025" },
    ];

    return (
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <p className="section-subtitle">Mark your calendar for these key milestones</p>
          <div className="divider" />
          <div className="date-grid">
            {dates.map((item, idx) => (
              <div key={idx} className={`date-card ${item.highlight ? "highlight" : ""}`}>
                <h3 className="date-title">{item.title}</h3>
                <p className="date-value">{item.date}</p>
                {item.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "var(--accent)",
                      color: "var(--bg)",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Important
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const AwardCategories = () => {
    const categories = [
      {
        title: "Higher Education Awards",
        items: [
          "Excellence in Student Outreach, Engagement and Digital Innovation 2025",
          "Excellence in Digital Education and Innovation 2025",
          "Most Promising University/Institute in R&D (Research & Development) 2025",
          "Remarkable Contribution in Online Learning and Digital Practices 2025",
          "Innovation in Higher Education and Skills Enhancement 2025",
          "Outstanding University/Institute in Learning Initiative and Skill Development 2025",
          "Outstanding University/Institute in Innovative Teaching and Learning Practices 2025",
          "Most Impactful University/Institute in Digital Infrastructure 2025",
          "Most Emerging University/Engineering Institute 2025",
          "Outstanding University/Institute with excellent infrastructure and Green Campus Initiative 2025",
          "Outstanding University/Institute in Digital Innovation, Technology and Best Practices 2025",
          "CSR Excellence in Higher Education 2025",
          "Most Impactful Contribution for Global Outreach and Exchange Program 2025",
          "Most Innovative University/Institute in Global Collaboration through Digital Learning 2025",
          "Most Emerging Startup University 2025",
          "Remarkable Contribution in Curriculum Development and Online Teaching 2025",
          "Most Promising University/Institute in Digital Transformation 2025",
          "Most Promising B-School of the Year 2025",
          "Most Promising Corporate-Governed University 2025",
          "Innovative Practices for Academic Excellence in Higher Education",
          "Outstanding Institute/University in Smart Class Initiative 2025",
          "Outstanding University in Training & Placements 2025",
          "Most Emerging University/Institute in India",
          "Most Promising University in Curriculum Design and Development 2025",
          "E-campus Award for the year 2025",
          "Remarkable Contribution in Distance Learning Education",
          "Most Promising Medical Institute/University for the year 2025",
          "Most Promising Institute/University in India",
          "Outstanding Engineering Institute for Student Outreach and Global Exposure",
          "Most Promising Engineering Institute in India",
          "Outstanding Institute with Best Infrastructure for the year 2025",
        ],
      },
      {
        title: "Individual Leadership Awards",
        items: [
          "Iconic Leadership in Higher Education 2025",
          "Outstanding Leadership in Higher Education 2025",
          "Outstanding Contribution in Online Education and Pedagogy 2025",
          "Outstanding Teaching Excellence Award 2025",
          "Excellent Digital Educator Award of the year 2025",
          "Excellence in Innovative Teaching & Learning Practices 2025",
          "Outstanding Research Scholar of the year 2025",
          "Emerging Leader in Higher Education 2025",
          "Entrepreneurship Award in Higher Education 2025",
          "Women Entrepreneurship Award in Higher Education 2025",
          "Outstanding Vice Chancellor of the year 2025",
          "Early Childhood Educator of the Year",
          "Pre-School Director of the Year",
          "Innovative Pre-School Leader",
          "Principal of the Year",
          "Excellence in Inclusive Education Leadership",
          "STEM Educator of the Year",
          "Dean of the Year",
          "University Chancellor/Vice Chancellor of the Year",
          "Innovative School Leader",
          "Outstanding Higher Education Administrator",
          "Best Higher Education Innovator",
          "EdTech Innovator of the Year",
          "EdTech Founder of the Year",
          "EdTech Thought Leader Award",
          "Best Educator in Online Learning",
          "Outstanding Women in Business Leadership",
          "Innovative Entrepreneur of the Year",
          "Business Leader of the Year",
          "Best Digital Transformation Leader",
          "Business Growth Leader of the Year",
        ],
      },
      {
        title: "EdTech Awards",
        items: [
          "Leading E-learning Platform 2025",
          "Outstanding Tech Solution Provider for Higher Education 2025",
          "Outstanding Tech Solution Provider for Schools 2025",
          "Most Promising Assessment Solution Provider of the Year 2025",
          "Outstanding Smart Class Solution Provider of the Year 2025",
          "Leading ERP Solution Provider of the Year 2025",
          "Leading Education Finance Company of the Year 2025",
          "Outstanding Contribution to Education Financing in India 2025",
          "Most Trusted Education Loan Provider of the Year 2025",
          "Most Preferred Financial Partner for Students 2025",
          "Excellence in Customer - Centric Education Loan Services 2025",
          "Outstanding Digital Education Platform Provider of the Year 2025",
          "Leading School Security Solution Provider of the Year 2025",
          "Most Promising Video Conferencing Solution Provider of the Year 2025",
          "Excellence in Multi-Language Content Provider of the Year 2025",
          "Outstanding Admission Solution Provider of the Year 2025",
          "Most Promising AR-VR Solution Provider of the Year 2025",
          "Outstanding Innovation in AI-ML 2025",
          "Outstanding Payment Solution Provider of the Year 2025",
          "Leading Display Solution Provider of the Year 2025",
          "Most Promising Hybrid Solution Provider of the Year 2025",
          "Innovative Training Provider to Working Professionals 2025",
          "Innovative Digital Payment Solution Provider of the Year 2025",
          "Most Promising LMS Provider of the Year 2025",
          "Most Immersive Learning Product of the Year",
          "Best EdTech Company of the Year",
          "EdTech Startup of the Year",
          "Best EdTech Solution of the Year",
          "Best Cyber Privacy/Security Solution in Education",
          "Best Robotics Solution of the Year",
          "Best Classroom Tech Solution of the Year",
          "Best Test Prep Solution of the Year",
          "Emerging Technology Solution",
          "Best Learning Mobile App",
          "Most Effective Use of EdTech Tools",
        ],
      },
      {
        title: "School Education Awards",
        items: [
          "Best Tech Savvy School of the Year",
          "Best Technically Advanced School Chain of the Year",
          "Best Standalone School of the Year",
          "School with Best IT Infrastructure",
          "Innovation for Curriculum Award",
          "Educational Excellence Award",
          "Best School in Management System of the Year",
          "Most Innovative School of the Year",
          "Best E-learning Methodology School of the Year",
          "Most Progressive School of the Year",
          "Best School for Futuristic Education",
          "Most Inspirational School Award",
        ],
      },
      {
        title: "Preschool Education Awards",
        items: [
          "Best Preschool Chain of the Year",
          "Best Standalone Preschool of the Year",
          "Innovation for Curriculum Award",
          "Innovation in Preschool Infrastructure",
          "Best Use of Technology in Preschool",
          "Effective Implementation & Integration of ICT",
        ],
      },
    ];

    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Award Categories</h2>
          <p className="section-subtitle">Recognizing excellence across multiple domains of education</p>
          <div className="divider" />
          <div className="category-grid">
            {categories.map((category, idx) => (
              <div key={idx} className="category-card">
                <div className="category-header">{category.title}</div>
                <div className="category-body">
                  <ul className="category-list">
                    {category.items.map((item, j) => (
                      <li key={j} className="category-item">
                        <span className="category-bullet">•</span>
                        <span className="category-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>{/* CTA reserved */}</div>
        </div>
      </section>
    );
  };

  const NominationGuidelines = () => (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Nomination Guidelines</h2>
        <p className="section-subtitle">Follow these guidelines for a successful nomination</p>
        <div className="divider" />
        <div className="card">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#b0c4de" }}>
            {[
              "All nominations will be treated as strictly confidential.",
              "Applicants must submit the official online nomination form.",
              "Multiple categories can be selected while filling out the nomination form.",
              "A nomination fee is applicable at this stage to ensure an independent and unbiased selection process.",
              "All submitted applications will be reviewed by an external panel of jurors.",
              "The jury panel will determine the winners for each category.",
              "Winners will be notified at least 15 days in advance of the ceremony.",
            ].map((text, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem", padding: "0.5rem" }}>
                <span style={{ color: "var(--accent)", marginRight: "1rem", fontWeight: "bold" }}>✓</span>
                <span style={{ fontSize: "1.05rem" }}>{text}</span>
              </li>
            ))}
          </ul>

          <div className="bank">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "var(--accent)" }}>
              Bank Account Details for Payment
            </h3>
            <div className="bank-grid">
              <div>
                <p>
                  <strong>Account Name:</strong> Fintrex Media Private Limited
                </p>
                <p>
                  <strong>Account No:</strong> 44367159331
                </p>
                <p>
                  <strong>Bank:</strong> State Bank of India (SBI)
                </p>
              </div>
              <div>
                <p>
                  <strong>Branch:</strong> Muzaffarnagar – Court Road branch
                </p>
                <p>
                  <strong>IFSC Code:</strong> SBIN0050259
                </p>
                <p>
                  <strong>SWIFT Code:</strong> SBIN0065135
                </p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
              <button
                onClick={() => {
                  const bankDetails = `Account Name: Fintrex Media Private Limited
Account No: 44367159331
Bank: State Bank of India (SBI)
Branch: Muzaffarnagar – Court Road branch
IFSC Code: SBIN0050259
SWIFT Code: SBIN0065135`;
                  navigator.clipboard.writeText(bankDetails);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="copy-btn"
                aria-label="Copy bank details"
                title="Copy bank details"
              >
                {copied ? "✓" : "⎘"}
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a className="cta" href="/Nominate">Nominate Now</a>
          </div>
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Nomination Fee</h2>
        <p className="section-subtitle">Choose the category that matches your nomination</p>
        <div className="divider" />
        <div className="price-grid">
          <div className="price-card" role="article" aria-label="Individual price card">
            <h3 className="price-title">Individual</h3>
            <p className="price-value" style={{ color: "var(--accent)" }}>₹11,800</p>
            <p className="price-desc">(₹10,000 + 18% GST)</p>
            <ul className="price-list">
              <li>✓ Individual professionals</li>
              <li>✓ Educators & Teachers</li>
              <li>✓ Researchers</li>
            </ul>
          </div>

          <div className="price-card featured" role="article" aria-label="Educational institutions price card">
            <div className="price-badge">Most Popular</div>
            <h3 className="price-title">Educational Institutions</h3>
            <p className="price-value">₹17,700</p>
            <p className="price-desc" style={{ color: "var(--bg)" }}>(₹15,000 + 18% GST)</p>
            <ul className="price-list" style={{ color: "var(--bg)" }}>
              <li>✓ Schools & Colleges</li>
              <li>✓ Universities</li>
              <li>✓ Preschools</li>
            </ul>
          </div>

          <div className="price-card" role="article" aria-label="EdTech companies price card">
            <h3 className="price-title">EdTech Companies</h3>
            <p className="price-value" style={{ color: "var(--accent)" }}>₹30,000</p>
            <p className="price-desc">(₹25,000 + 18% GST)</p>
            <ul className="price-list">
              <li>✓ EdTech Startups</li>
              <li>✓ Technology Providers</li>
              <li>✓ Solution Providers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const Location = () => (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Venue</h2>
        <div className="divider" />
        <div className="venue-grid">
          <div className="venue-card" aria-label="Venue image">
            <img
              className="venue-img"
              src="https://events.eletsonline.com/nbfc100/19th-edition/assets/images/hinn3.png"
              alt="Awards Venue"
            />
          </div>
          <div className="venue-card" aria-label="Venue map">
            <iframe
              title="Awards Venue Location"
              src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.304619941166!2d77.29586707396079!3d28.590636975687662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce488af1ee101%3A0x67af76d8b20ef69e!2sHoliday%20Inn%20New%20Delhi%20Mayur%20Vihar%20Noida%20an%20IHG%20Hotel!5e0!3m2!1sen!2sin!4v1761317364257!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "15px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with us for any queries</p>
        <div className="divider" />
        <div className="contact-grid">
          <div className="contact-card">
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--bg)" }}>
              For Award Nomination Queries
            </h3>
            <div className="contact-info">
              <div className="info-row">
                <div className="info-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--bg)" }}>Priyansh Saharawat</p>
                  <p style={{ opacity: 0.8, color: "var(--bg)" }}>Award Coordinator</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--bg)" }}>Email</p>
                  <p style={{ opacity: 0.8, color: "var(--bg)" }}>priyansh@fintrexmedia.com</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--bg)" }}>Phone</p>
                  <p style={{ opacity: 0.8, color: "var(--bg)" }}>+91 7011499056</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card ready-card">
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--accent)" }}>
              Ready to Nominate?
            </h3>
            <p style={{ color: "#b0c4de", marginBottom: "1.5rem" }}>
              Don't miss this opportunity to get recognized for your contributions to education. Start your nomination
              process today!
            </p>
            <a className="cta" href="/Nominate">Begin Nomination</a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="awards-page">
      <style>{`
:root {
  --bg: #0a1f3f;
  --text: #e0e7ff;
  --accent: #00a8e8;
  --card-bg: #1a3a52;
  --card-border: #2a5a7a;
}

/* Global reset to prevent horizontal scroll */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}
*, *::before, *::after { box-sizing: border-box; }

/* Base */
.awards-page {
  font-family: 'Poppins','Inter',system-ui,-apple-system,sans-serif;
  color: var(--text);
  background: var(--bg);
  padding-top: 50px;
  overflow-x: hidden;
}
.awards-page img, .awards-page iframe {
  max-width: 100%;
  display: block; 
}

.section { padding: 80px 20px; width: 100%; }
.section-alt { background: #0f2a42; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 8px; }

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--accent);
}
.section-subtitle {
  text-align: center;
  font-size: 1.05rem;
  color: #b0c4de;
  margin: 0 auto 2rem;
  max-width: 600px;
}
.divider { width: 80px; height: 4px; background: var(--accent); margin: 0 auto 2rem; border-radius: 2px; }

.card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  border: 1px solid var(--card-border);
  transition: transform .3s ease, box-shadow .3s ease;
}

.cta {
  display: inline-block;
  background: var(--accent);
  color: var(--bg);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,168,232,0.3);
  transition: transform .2s ease, box-shadow .2s ease;
  white-space: normal;
}
.cta:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(0,168,232,0.35); }

/* Hero Section - Updated for responsiveness */
.hero-section {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 2rem;
}
// .hero-section::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(10, 31, 63, 0.6);
//   z-index: 1;
// }

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: #e0e7ff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-cta {
  display: inline-block;
  background: var(--accent);
  color: var(--bg);
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,168,232,0.4);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0,168,232,0.5);
  background: #0099d6;
}

/* Grids */
.grid { display: grid; gap: 2rem; }

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: center;
}
.about-text { padding: 1.5rem; }
.award-trophy {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 15px;
  padding: 1.5rem;
  overflow: hidden;
}

.date-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}
.date-card {
  background: var(--card-bg);
  padding: 1.75rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0,0,0,0.2);
  border: 2px solid var(--card-border);
  transition: transform .3s ease, box-shadow .3s ease;
  position: relative;
  overflow: hidden;
}
.date-card:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(0,168,232,0.2); }
.date-card.highlight { background: linear-gradient(135deg, var(--card-bg), var(--card-border)); border-color: var(--accent); }
.date-title { font-size: 1.2rem; font-weight: 700; margin-bottom: .75rem; color: var(--text); }
.date-value { font-size: 1.4rem; font-weight: 800; color: var(--accent); }

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.category-card {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  border: 1px solid var(--card-border);
  transition: transform .3s ease, box-shadow .3s ease;
}
.category-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,168,232,0.2); }
.category-header { background: var(--accent); color: var(--bg); padding: 1.2rem; font-size: 1.1rem; font-weight: 700; text-align: center; }
.category-body { padding: 1rem 1.25rem; max-height: 380px; overflow-y: auto; overflow-x: hidden; }
.category-list { list-style: none; margin: 0; padding: 0; }
.category-item { display: flex; align-items: flex-start; margin-bottom: .6rem; padding: .4rem; border-radius: 8px; transition: background .2s ease; }
.category-item:hover { background: #2a5a7a; }
.category-bullet { color: var(--accent); margin-right: .6rem; font-weight: bold; }
.category-text { color: #b0c4de; font-size: .95rem; overflow-wrap: anywhere; word-break: break-word; }

.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.price-card {
  background: var(--card-bg);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  border: 2px solid var(--card-border);
  transition: transform .3s ease, box-shadow .3s ease;
  position: relative;
}
.price-card:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(0,168,232,0.2); }
.price-card.featured { background: var(--accent); color: var(--bg); transform: scale(1.03); }
.price-card.featured:hover { transform: scale(1.06); }
.price-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg);
  color: var(--accent);
  padding: 5px 16px;
  border-radius: 20px;
  font-size: .85rem;
  font-weight: 700;
}
.price-title { font-size: 1.3rem; font-weight: 700; margin-bottom: .75rem; }
.price-value { font-size: 2.4rem; font-weight: 800; margin-bottom: .25rem; }
.price-desc { color: #b0c4de; margin-bottom: 1rem; }
.price-list { text-align: left; color: #b0c4de; margin-bottom: 1.5rem; }
.price-list li { margin-bottom: .45rem; }

.venue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.venue-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  height: 280px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
}
.venue-img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 15px; }

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.contact-card { background: var(--accent); color: var(--bg); padding: 2rem; border-radius: 20px; text-align: center; }
.contact-info { text-align: left; }
.info-row { display: flex; align-items: center; margin-bottom: 1.2rem; }
.info-icon {
  background: rgba(10,31,63,0.2);
  padding: 12px;
  border-radius: 50%;
  margin-right: 1rem;
  display: flex; align-items: center; justify-content: center;
}
.ready-card { display: flex; flex-direction: column; justify-content: center; }

/* Bank */
.bank {
  position: relative;
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--bg);
  border-radius: 10px;
  border: 1px solid var(--card-border);
}
.bank-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  color: #b0c4de;
}
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--accent);
  color: var(--bg);
  border: none;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease;
  box-shadow: 0 5px 15px rgba(0,168,232,0.3);
}
.copy-btn:hover { transform: translateY(-2px); }

/* Scrollbar */
.category-body::-webkit-scrollbar { width: 10px; }
.category-body::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
.category-body::-webkit-scrollbar-thumb { background: rgba(0,168,232,0.6); border-radius: 10px; }
.category-body::-webkit-scrollbar-thumb:hover { background: rgba(0,168,232,0.7); }
@supports (scrollbar-color: auto) {
  .category-body { scrollbar-color: rgba(0,168,232,0.6) rgba(255,255,255,0.06); scrollbar-width: thin; }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section { padding: 64px 16px; }
  .section-title { font-size: 2rem; }
  .price-value { font-size: 2.1rem; }
  .hero-title { font-size: 3rem; }
  .hero-subtitle { font-size: 1.3rem; }
}

@media (max-width: 768px) {
  .section { padding: 56px 14px; }
  .section-title { font-size: 1.8rem; }
  .section-subtitle { font-size: 1rem; }
  .divider { margin-bottom: 1.5rem; }
  .category-body { max-height: 320px; }
  .container { padding: 0 12px; }
  
  /* Hero Section Mobile */
  .hero-section {
    min-height: 70vh;
    background-position: top center;
    padding: 1.5rem;
  }
  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  .hero-cta {
    padding: 14px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section { padding: 48px 12px; }
  .section-title { font-size: 1.6rem; }
  .price-title { font-size: 1.1rem; }
  .price-value { font-size: 1.8rem; }
  .cta { padding: 12px 24px; font-size: .95rem; }
  
  /* Hero Section Small Mobile */
  .hero-section {
    min-height: 60vh;
    padding: 1rem;
  }
  .hero-title {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .hero-cta {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
}

/* Motion accessibility */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
      `}</style>

      <HeroSection />
      <AboutAwards />
      <ImportantDates />
      <AwardCategories />
      <NominationGuidelines />
      <Pricing />
      <Location />
      <Contact />
    </div>
  );
};

export default Awards;