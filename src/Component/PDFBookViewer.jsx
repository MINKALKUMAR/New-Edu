import React from 'react';
import { useNavigate } from "react-router-dom";

export default function PDFBookViewer() {
  const navigate = useNavigate();

  const containerStyle = {
    width: '95%',
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '10px',
    boxSizing: 'border-box'
  };

  const homeButtonStyle = {
    marginBottom: '15px',
    padding: '10px 18px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const iframeStyle = {
    border: '1px solid lightgray',
    width: '100%',
    height: 'calc(100vh - 120px)',
    minHeight: '500px',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <button style={homeButtonStyle} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <iframe
        allowFullScreen="allowfullscreen"
        allow="clipboard-write"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/47af540dd3.html"
        style={iframeStyle}
        title="PDF Flipbook"
      />
    </div>
  );
}
