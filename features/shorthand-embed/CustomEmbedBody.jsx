// src/components/features/shorthand-embed/CustomEmbedBody.jsx

import React from "react";

const CustomEmbedBody = ({ element }) => {
  const embed = element?.embed;
  if (!embed || !embed.url) return null;

  const {
    url,
    config: {
      button_text = "Découvrir le contenu",
      background_color = "#D51D2C",
      text_color = "#FFFFFF"
    } = {}
  } = embed;

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "16px 32px",
          backgroundColor: background_color,
          color: text_color,
          fontFamily: "'Red Hat Display', sans-serif",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      >
        {button_text}
      </a>
    </div>
  );
};

export default CustomEmbedBody;
