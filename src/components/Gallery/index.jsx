import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries, dialogBackground } from '../../assets';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';

const Gallery = ({ dimensions, galleryRef, inViewport }) => {
  const { pathname } = useLocation();
  const [loadedGif, setLoadedGif] = useState(false);

  const images = useMemo(() => {
    let galleriesName = pathname.substring(1, pathname.length);
    if (!galleries[galleriesName]) galleriesName = 'tradizione';
    const list = galleries[galleriesName].list.map(el => ({ original: el }));
    const gif = galleries[galleriesName].gif;
    return {
      list,
      gif,
    };
  }, [pathname]);

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

  const changeGif = useCallback(() => {
    if (window.location.href.includes(pathname) && !loadedGif) {
      setLoadedGif(true);
      document.querySelector('.image-gallery-image').src = images.gif;
    }
  }, [pathname, loadedGif]);

  const loadGif = evt => {
    if (evt.target.src.includes(images.list[0].original)) {
      setTimeout(() => {
        changeGif();
      }, 2500);
    }
  };

  const enterFullscreen = useCallback(async () => {
    const elemFullscreen = document.documentElement;
    const galleryContainer = document.querySelector('.image-gallery');
    galleryContainer.classList.add('fullscreen-modal');

    if (elemFullscreen.requestFullscreen) {
      await elemFullscreen.requestFullscreen();
    } else if (elemFullscreen.webkitRequestFullscreen) {
      /* Safari */
      await elemFullscreen.webkitRequestFullscreen();
    } else if (elemFullscreen.msRequestFullscreen) {
      /* IE11 */
      await elemFullscreen.msRequestFullscreen();
    }
    screen?.orientation?.lock('landscape');
  }, []);

  const exitFullscreen = useCallback(async () => {
    const galleryContainer = document.querySelector('.image-gallery');
    galleryContainer.classList.remove('fullscreen-modal');
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      await document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      await document.msExitFullscreen();
    }
    screen?.orientation?.lock('portrait');
  }, []);

  const changeOrientation = isFullscreen => {
    if (isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  // const WorkaroundFromSephiaToColored = event => {
  // if (dimensions && (dimensions.isTablet || dimensions.isMobile)) {
  //   if (['/', '/tradizione'].includes(pathname)) {
  //     // mobile & talet use GIF
  //     setTimeout(() => {
  //       document.querySelector('.image-gallery-image').src = gif;
  //     }, 2000);
  //   }
  // } else {
  //   var container = [...document.querySelectorAll('.image-gallery-slide')].find(
  //     el => el.offsetHeight !== 0,
  //   );
  //   if (container.children.length > 1) return;
  //   container.style.height = container.offsetHeight + 'px';
  //   const sephia = container.children[0];
  //   sephia.style.position = 'absolute';
  //   sephia.id = 'sephia';

  //   const imageColored = sephia.cloneNode();
  //   imageColored.src = colored;
  //   // imageColored.style.opacity = 0;
  //   imageColored.id = 'colored';
  //   container.appendChild(imageColored);
  // }

  // if (dimensions && (dimensions.isTablet || dimensions.isMobile)) {
  //   setTimeout(() => {
  //     sephia && sephia.classList.add('forceAnimation');
  //     imageColored && imageColored.classList.add('forceAnimation');
  //   }, 2000);
  // }
  // };

  return (
    <>
      <ImageGallery
        id="galleryContainer"
        className="galleryContainer"
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        ref={galleryRef}
        items={images.list}
        onImageLoad={loadGif}
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
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            className="image-gallery-icon image-gallery-fullscreen-button"
            onClick={() => {
              onClick();
              setTimeout(() => {
                dimensions.isMobile && changeOrientation(!isFullscreen);
              }, 200);
            }}
          >
            {isFullscreen ? (
              <galleries.galleryCustom.resizescreenIcon />
            ) : (
              <galleries.galleryCustom.fullscreenIcon />
            )}
          </button>
        )}
      />
    </>
  );
};

export default Gallery;
