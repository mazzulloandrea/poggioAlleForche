import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries } from '../../assets';
import { routes, NO_MENU_ROUTE_KEY } from '../../utils';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';

const Gallery = ({ dimensions }) => {
  const { pathname } = useLocation();
  let galleriesName = pathname.substring(1, pathname.length);
  if (!galleries[galleriesName]) galleriesName = 'tradizione';
  const data = galleries[galleriesName].map(el => ({ original: el }));

  const arrowProps = {
    height: '10vw',
    width: '10vw',
    marginBottom:
      dimensions && dimensions.isMobile
        ? '50px'
        : dimensions && dimensions.isTablet
        ? '120px'
        : '17vh',
  };

  return (
    <ImageGallery
      items={data}
      renderLeftNav={(onClick, disabled) => (
        <button className="image-gallery-icon image-gallery-left-nav">
          <img
            className="image-gallery-svg"
            src={galleries.galleryCustom.arrowSx}
            onClick={onClick}
            disabled={disabled}
            style={arrowProps}
          />
        </button>
      )}
      renderRightNav={(onClick, disabled) => (
        <button className="image-gallery-icon image-gallery-right-nav">
          <img
            className="image-gallery-svg"
            src={galleries.galleryCustom.arrowDx}
            onClick={onClick}
            disabled={disabled}
            style={arrowProps}
          />
        </button>
      )}
    />
  );
};

export default Gallery;
