import React from 'react';

const ShorthandButton = ({ config }) => {
  if (!config?.url) return null;

  const {
    url,
    btn_text = 'Lire la suite',
    btn_color = '#D51D2C',
    text_color = '#FFFFFF'
  } = config;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontSize: '16px',
          padding: '12px 24px',
          backgroundColor: btn_color,
          color: text_color,
          borderRadius: '8px',
          textDecoration: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {btn_text}
      </a>
    </div>
  );
};

export default ShorthandButton;

