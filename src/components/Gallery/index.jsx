import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import galleries from '../../assets/galleries';
import { routes, NO_MENU_ROUTE_KEY } from '../../utils';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';

const Gallery = () => {
  const { pathname } = useLocation();
  let galleriesName = pathname.substring(1, pathname.length);
  if (!galleries[galleriesName]) galleriesName = 'tenuta';
  const data = galleries[galleriesName].map(el => ({ original: el }));

  return <ImageGallery items={data} />;
};

export default Gallery;
