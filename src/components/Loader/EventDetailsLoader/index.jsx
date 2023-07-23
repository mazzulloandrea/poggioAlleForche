import React from 'react';
import ContentLoader from 'react-content-loader';

const EventDetailsLoader = props => (
  <ContentLoader speed={2} backgroundColor="#333333" foregroundColor="#444444" {...props}>
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="200" />
    <rect x="10" y="216" rx="0" ry="0" width="200" height="30" />
    <rect x="300" y="216" rx="0" ry="0" width="90" height="30" />
    <rect x="10" y="265" rx="0" ry="0" width="380" height="50" />
    <rect x="10" y="330" rx="0" ry="0" width="100" height="30" />
    <rect x="10" y="375" rx="0" ry="0" width="95%" height="300" />
  </ContentLoader>
);

export default EventDetailsLoader;
