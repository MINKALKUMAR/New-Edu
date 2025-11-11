import React from "react";
import "./FixedButton.css";

export default function FixedButton() {
  const handleClick = () => {
    alert("Form link will be added here");
  };

  return (
    <button className="fixed-button" onClick={handleClick} aria-label="Form Button">
      <span className="button-text">Draft Agenda</span>
    </button>
  );
}
