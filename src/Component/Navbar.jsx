import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why Attend", href: "#why-attend" },
    // { label: "Who Should Attend", href: "#who-should-attend" },
    { label: "Past Speakers", href: "#past-speakers" },
    { label: "Past Partners", href: "#past-partners" },
    // { label: "Venue", href: "#venue" },
    { label: "Contact", href: "#connect" },
    { label: "Past Edition", href: "https://previousedition.edutomorrow.in" },
  ];

  const handleNavClick = (href) => {
    setOpen(false);

    // ✅ Check if the link is external
 if (href.startsWith("http")) {
  window.location.href = href; // Opens in same tab
  return;
}

    // ✅ Internal navigation
    if (location.pathname === "/awards" || location.pathname==="/registration" || location.pathname==="/SponsorshipQuery" || location.pathname==="/Nominate") {
      navigate("/" + href); // Go back to home and scroll
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`menu-toggle ${open ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <button
                  className="nav-item"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Awards Button */}
          <button className="cta" onClick={() => navigate("/awards")}>
            AWARDS NOMINATION
          </button>
        </nav>
      </div>
    </header>
  );
}
