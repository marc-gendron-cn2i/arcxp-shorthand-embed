// features/custom-embed/CustomEmbedBody.jsx

import React from 'react'
import ShorthandButton from './shorthand-button' // Import your button UI component

const CustomEmbedBody = ({ element }) => {
  // Safety check in case there's no config
  const config = element?.embed?.config || {}

  return (
    <div className="custom-embed">
      <ShorthandButton config={config} />
    </div>
  )
}

export default CustomEmbedBody
