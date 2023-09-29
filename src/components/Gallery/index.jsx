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
  const gif = galleries[galleriesName].gif;

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
    if (dimensions && (dimensions.isTablet || dimensions.isMobile)) {
      if (['/', '/tradizione'].includes(pathname)) {
        // mobile & talet use GIF
        setTimeout(() => {
          document.querySelector('.image-gallery-image').src = gif;
        }, 2000);
      }
    } else {
      var container = [...document.querySelectorAll('.image-gallery-slide')].find(
        el => el.offsetHeight !== 0,
      );
      if (container.children.length > 1) return;
      container.style.height = container.offsetHeight + 'px';
      const sephia = container.children[0];
      sephia.style.position = 'absolute';
      sephia.id = 'sephia';

      const imageColored = sephia.cloneNode();
      imageColored.src = colored;
      // imageColored.style.opacity = 0;
      imageColored.id = 'colored';
      container.appendChild(imageColored);
    }

    // if (dimensions && (dimensions.isTablet || dimensions.isMobile)) {
    //   setTimeout(() => {
    //     sephia && sephia.classList.add('forceAnimation');
    //     imageColored && imageColored.classList.add('forceAnimation');
    //   }, 2000);
    // }
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
