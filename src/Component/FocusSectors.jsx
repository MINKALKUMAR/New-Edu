import React from "react";

const FocusSectors = () => {
  const sectors = [
    { title: "Universities", image: "/university-students-in-graduation-ceremony.png", size: "large" },
    { title: "Established Edtech", image: "/professionals-in-modern-office-discussing-educatio.png", size: "small" },
    { title: "Corporate Catering", image: "/business-professionals-in-corporate-training-sessi.png", size: "large" },
    { title: "Edutech", image: "/tech-professionals-working-on-educational-software.png", size: "small" },
    { title: "Edtech Startup", image: "/young-entrepreneurs-in-startup-office-with-laptops.png", size: "large" },
    { title: "Fashion & Design", image: "/fashion-design-students-working-on-creative-projec.png", size: "small" },
    { title: "B-School", image: "/mba-students-in-business-school-classroom.png", size: "large" },
    { title: "Established Edtech", image: "/professionals-in-modern-office-discussing-educatio.png", size: "small" },
  ];

  const duplicatedSectors = [...sectors, ...sectors];

  return (
    <>
      <style>{`
        .focus-section {
          padding: 60px 20px;
          backgroundColor:#0b1f3d;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 50px;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .section-header p {
          font-size: 18px;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
        }

        .sector-scroll {
          position: relative;
          overflow-x: auto;
          padding: 30px 10px;
          overflow: hidden;
        }

        .sector-list {
          display: flex;
          align-items: center;
          gap: 20px;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .sector-card {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .sector-card:hover {
          transform: scale(1.05);
          z-index: 2;
        }

        .sector-card.large {
          width: 280px;
          height: 380px;
        }

        .sector-card.small {
          width: 240px;
          height: 280px;
        }

        .sector-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .sector-card:hover .sector-image {
          transform: scale(1.1);
        }

        .sector-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 41, 79, 1), rgba(30, 59, 138, 0.32), transparent);
        }

        .sector-content {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: #ffffff;
        }

        .sector-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 32px;
          }

          .sector-card.large {
            width: 220px;
            height: 300px;
          }

          .sector-card.small {
            width: 180px;
            height: 240px;
          }

          .sector-content h3 {
            font-size: 18px;
          }
        }
      `}</style>

      <section className="focus-section">
        <div className="container">
          <div className="section-header">
            <h2>Focus Sector</h2>
            {/* <p>Connecting leaders across diverse educational sectors</p> */}
          </div>

          <div className="sector-scroll">
            <div className="sector-list">
              {duplicatedSectors.map((sector, index) => (
                <div
                  key={`${sector.title}-${index}`}
                  className={`sector-card ${sector.size === "large" ? "large" : "small"}`}
                >
                  <img src={sector.image} alt={sector.title} className="sector-image" loading="lazy" />
                  <div className="sector-overlay"></div>
                  <div className="sector-content">
                    <h3>{sector.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusSectors;
