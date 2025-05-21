import React from 'react';

// A simple component to render the Shorthand button embed
const CustomEmbedBody = ({ element }) => {
  // We expect our element to have the embed data structure as saved by Composer
  const { subtype, embed } = element;
  if (!embed) {
    return null;  // Nothing to render if no embed data present
  }

  // (Optional) If there are multiple custom embed subtypes, you could switch on subtype:
  // if(subtype !== 'shorthand-embed') return null;

  // Extract the fields from embed data
  const { url: storyUrl, config } = embed;
  const buttonText = config?.buttonText || 'Découvrir le contenu';
  const buttonColor = config?.buttonColor || '#0055FF';
  const textColor = config?.textColor || '#FFFFFF';

  // Inline styles for the button using the config values
  const buttonStyle = {
    fontFamily: "'Red Hat Display', sans-serif",
    fontSize: '1.125rem',
    fontWeight: 400,
    backgroundColor: buttonColor,
    color: textColor,
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block'
  };

  return (
    <div className="shorthand-embed" style={{ textAlign: 'center', margin: '20px 0' }}>
      <a href={storyUrl} target="_blank" rel="noopener noreferrer"
         style={buttonStyle}>
        {buttonText}
      </a>
    </div>
  );
};

export default CustomEmbedBody;

