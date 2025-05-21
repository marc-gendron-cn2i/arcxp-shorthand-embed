// content/sources/shorthand-story.js
import { CONTENT_BASE } from 'fusion:environment';  // (Use environment variables as needed)

const resolve = (query) => {
  // Expect either a story ID or a full story URL from query parameters
  const { storyId, storyUrl } = query;
  if (!storyId && !storyUrl) {
    throw new Error('shorthand-story content source requires a storyId or storyUrl');
  }

  // If an external API existed for Shorthand stories, construct its URL here.
  // For example, one might use storyId to call a Shorthand API endpoint.
  // Since we only use provided data, we won't fetch an external URL.
  return '';  // No external URL to fetch; returning an empty string or null.
};

const transform = (data, query) => {
  // If we had fetched external data, process it into a usable format here.
  // In this simple case, we just pass through the query as the data result.
  const { storyUrl, buttonText, buttonColor, textColor } = query;
  return {
    storyUrl,
    buttonText,
    buttonColor,
    textColor
  };
};

export default {
  resolve,
  transform,
  params: {
    storyId: 'text',
    storyUrl: 'text',
    buttonText: 'text',
    buttonColor: 'text',
    textColor: 'text'
  }
};

