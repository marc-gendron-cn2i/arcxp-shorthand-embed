import React from 'react';

export default function CustomEmbedShorthandBody({ element }) {
  const { id:url, config } = element.embed;
  const { buttonText, bgColor, textColor } = config;
  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: '4px',
          textDecoration: 'none',
          fontFamily: 'Red Hat Display, sans-serif',
          fontSize: '1rem'
        }}
      >
        {buttonText}
      </a>
    </div>
  );
}
