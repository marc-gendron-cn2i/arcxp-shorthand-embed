import React from 'react';
import Paragraph from './Paragraph';
import ImageBlock from './ImageBlock';
import VideoPlayer from './VideoPlayer';
import CustomEmbedBody from 'features/custom-embed/CustomEmbedBody'; // <- your new embed component

const ArticleBody = ({ content_elements }) => {
  return content_elements.map((element, index) => {
    switch (element.type) {
      case 'text':
        return <Paragraph key={index} element={element} />;
      case 'image':
        return <ImageBlock key={index} element={element} />;
      case 'video':
        return <VideoPlayer key={index} element={element} />;
      case 'custom_embed':
        return <CustomEmbedBody key={index} element={element} />;
      default:
        return null;
    }
  });
};

export default ArticleBody;
