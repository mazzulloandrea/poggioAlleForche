import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries } from '../../assets';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';

const Gallery = ({ dimensions }) => {
  const { pathname } = useLocation();
  let galleriesName = pathname.substring(1, pathname.length);
  if (!galleries[galleriesName]) galleriesName = 'tradizione';
  const data = galleries[galleriesName].list.map(el => ({ original: el }));
  const colored = galleries[galleriesName].colored;

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

  const WorkaroundFromSephiaToColored = event => {
    const container = document.querySelector('.image-gallery-slide.image-gallery-center');
    if (container.children.length > 1) return;
    container.style.height = container.offsetHeight + 'px';
    const image = container.children[0];
    image.style.position = 'absolute';
    image.id = 'sephia';
    const imageColored = image.cloneNode();
    imageColored.src = colored;
    // imageColored.style.opacity = 0;
    imageColored.id = 'colored';
    container.appendChild(imageColored);
  };

  return (
    <ImageGallery
      showFullscreenButton={false}
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
      onImageLoad={WorkaroundFromSephiaToColored}
    />
  );
};

export default Gallery;
