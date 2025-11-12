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
            <rect x="45" y="40" width="312" height="170" rx="18" fill="#0a2757ff" />
            <rect x="0" y="210" width="400" height="40" rx="10" fill="#0d2b52ff" />
            <rect x="160" y="225" width="80" height="15" rx="5" fill="#0f56b3ff" />
          </svg>

          {/* Vimeo Embed — perfectly fitted */}
          <div className="video-frame-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1135978771?autoplay=1&loop=1&muted=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Industry Testimonial Video"
            ></iframe>
          </div>
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
