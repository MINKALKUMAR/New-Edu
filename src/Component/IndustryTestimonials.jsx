import React from "react";

export default function IndustryTestimonials() {
  return (
    <section className="industry-testimonials-dark">
      <div className="testimonials-content-dark">
        <div className="laptop-video-dark">
            <svg
              viewBox="0 0 400 260"
              xmlns="http://www.w3.org/2000/svg"
              className="laptop-svg"
            >
              <rect x="30" y="40" width="340" height="170" rx="18" fill="#0a2757ff" />
              <rect x="0" y="210" width="400" height="40" rx="10" fill="#0d2b52ff" />
              <rect x="160" y="225" width="80" height="15" rx="5" fill="#0f56b3ff" />
            </svg>
            <video
              className="laptop-screen-video"
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        <div className="testimonial-card-dark">
          <h2 className="testimonials-title-dark">Industry Testimonials</h2>
          <p className="testimonial-text-dark">
            "This event was a game-changer for our industry. The sessions were
            insightful, the networking opportunities were invaluable, and the
            overall experience exceeded expectations. Highly recommended for
            anyone looking to stay ahead in the skill development sector."
          </p>
          <div className="testimonial-author-dark">
            <strong>John Doe</strong>
            <span>CEO, TechCorp</span>
          </div>
        </div>
      </div>
    </section>
  );
}