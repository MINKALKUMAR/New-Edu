import React, { useState, useRef, useEffect } from "react";

export default function IndustryTestimonials() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  // Toggle mute/unmute for Vimeo video
  const toggleSound = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const message = {
      method: "setVolume",
      value: isMuted ? 1 : 0,
    };
    iframe.contentWindow.postMessage(JSON.stringify(message), "*");
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // Ensure video starts muted initially
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ method: "setVolume", value: 0 }),
        "*"
      );
    }
  }, []);

  return (
    <section className="industry-testimonials-dark">
      <div className="testimonials-content-dark">
        <div className="laptop-video-dark">
          {/* Laptop Frame */}
          <svg
            viewBox="0 0 400 260"
            xmlns="http://www.w3.org/2000/svg"
            className="laptop-svg"
          >
            <rect x="45" y="40" width="312" height="170" rx="18" fill="#0a2757ff" />
            <rect x="0" y="210" width="400" height="40" rx="10" fill="#0d2b52ff" />
            <rect x="160" y="225" width="80" height="15" rx="5" fill="#0f56b3ff" />
          </svg>

          {/* Vimeo Embed */}
          <div className="video-frame-wrapper">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1136010232?autoplay=1&loop=1&muted=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Industry Testimonial Video"
            ></iframe>

            {/* Sound Toggle Button */}
            <button className="sound-toggle" onClick={toggleSound}>
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card-dark">
          <h2 className="testimonials-title-dark">Industry Testimonials</h2>
          <p className="testimonial-text-dark">
            "This event was a game-changer for our industry. The sessions were
            insightful, the networking opportunities were invaluable, and the
            overall experience exceeded expectations. Highly recommended for
            anyone looking to stay ahead in the skill development sector."
          </p>
          <div className="testimonial-author-dark">
            <strong>
              Prof (Dr.) Manpreet Singh Manna
              <br />
              Vice Chancellor
            </strong>
            <span>, Chandigarh University</span>
          </div>
        </div>
      </div>
    </section>
  );
}
