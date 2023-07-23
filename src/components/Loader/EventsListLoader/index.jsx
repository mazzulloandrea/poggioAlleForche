import React from 'react';
import ContentLoader from 'react-content-loader';

const EventsListLoader = props => {
  return (
    <ContentLoader speed={2} backgroundColor="#333333" foregroundColor="#444444" {...props}>
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="70" />
      <rect x="0" y="80" rx="0" ry="0" width="100%" height="200" />
      <rect x="0" y="290" rx="0" ry="0" width="100%" height="200" />
      <rect x="0" y="500" rx="0" ry="0" width="100%" height="200" />
      <rect x="0" y="710" rx="0" ry="0" width="100%" height="200" />
    </ContentLoader>
  );
};

export default EventsListLoader;
