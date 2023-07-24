import React from 'react';
import ImageGallery from 'react-image-gallery';
import galleries from '../../assets/galleries';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  const data = galleries.home.map(el => ({ original: el }));
  return <ImageGallery items={data} fullScreen={true} />;
};

export default Gallery;
