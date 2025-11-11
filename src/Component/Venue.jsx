import React from "react";

export default function Venue() {
  const venue = {
    name: "Hotel Holiday Inn , ",
    address: " Mayur Vihar, New Delhi, India",
    imageUrl:
      "https://events.eletsonline.com/nbfc100/19th-edition/assets/images/hinn3.png", // Replace with your venue image if available
    mapsEmbed:
      "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.304619941166!2d77.29586707396079!3d28.590636975687662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce488af1ee101%3A0x67af76d8b20ef69e!2sHoliday%20Inn%20New%20Delhi%20Mayur%20Vihar%20Noida%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sin!4v1761317364257!5m2!1sen!2sin",
    directions:
      "https://maps.app.goo.gl/VGLohUVyFVJX6mhd9",
  };

  return (
    <section id="venue" className="venue-section">
      <div className="venue-inner">
        <header className="venue-header">
          <h2 className="venue-title">Venue</h2>
          <div className="venue-underline" />
        </header>

        <div className="venue-grid">
          {/* Image card */}
          <div className="venue-card">
            <div className="venue-media">
              <img
                src={venue.imageUrl}
                alt={`${venue.name} exterior`}
                className="venue-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Map card */}
          <div className="venue-card">
            <div className="venue-media">
              <iframe
                title={`${venue.name} on Google Maps`}
                src={venue.mapsEmbed}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="venue-map"
              />
            </div>
          </div>
        </div>

        {/* Address and CTA */}
        <div className="venue-meta">
          <div className="venue-meta-text">
            <strong className="venue-meta-name">{venue.name}</strong>
            <span className="venue-dot" />
            <span className="venue-meta-address">{venue.address}</span>
          </div>
          <a href={venue.directions} target="_blank" rel="noreferrer" className="venue-cta">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
