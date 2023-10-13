import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries, dialogBackground } from '../../assets';
import Dialog from '../Dialog';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';

const Gallery = ({ dimensions, galleryRef, inViewport }) => {
  const { pathname } = useLocation();
  let galleriesName = pathname.substring(1, pathname.length);
  if (!galleries[galleriesName]) galleriesName = 'tradizione';
  const data = galleries[galleriesName].list.map(el => ({ original: el }));
  // const colored = galleries[galleriesName].colored;
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
    if (['/', '/tradizione'].includes(pathname)) {
      // all device use GIF
      setTimeout(() => {
        document.querySelector('.image-gallery-image').src = gif;
      }, 2500);
    }

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
  };

  // const [fullscreen, setFullscreen] = useState(false);
  // const [showDialog, setShowDialog] = useState(false);

  // useEffect(() => {
  //   if (inViewport && !dimensions.isPortrait) {
  //     setFullscreen(true);
  //   } else {
  //     if (!fullscreen) return;
  //     galleryRef.current.exitFullScreen();
  //     setFullscreen(false);
  //   }
  // }, [inViewport, dimensions.isPortrait]);

  const enterFullscreen = useCallback(() => {
    // setShowDialog(false);
    const elemFullscreen = document.documentElement;
    // const galleryContainer = document.querySelector('.image-gallery');
    // galleryContainer.classList.add('fullscreenMode');
    // document.body.style.overflowY = 'hidden';

    if (elemFullscreen.requestFullscreen) {
      elemFullscreen.requestFullscreen();
    } else if (elemFullscreen.webkitRequestFullscreen) {
      /* Safari */
      elemFullscreen.webkitRequestFullscreen();
    } else if (elemFullscreen.msRequestFullscreen) {
      /* IE11 */
      elemFullscreen.msRequestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    // const elemFullscreen = document.documentElement;
    // const galleryContainer = document.querySelector('.image-gallery');
    // galleryContainer.classList.remove('fullscreenMode');
    // document.body.style.overflowY = 'auto';
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }, []);

  // useEffect(() => {
  //   if (fullscreen) {
  //     setShowDialog(true);
  //   } else {
  //     // if (!fullscreen) {
  //     //   enterFullscreen();
  //     // } else {
  //     setShowDialog(false);
  //     exitFullscreen();
  //   }
  // }, [fullscreen]);

  const changeOrientation = isFullscreen => {
    if (isFullscreen) {
      screen.orientation.lock('landscape');
    } else {
      screen.orientation.lock('portrait');
    }
  };

  return (
    <>
      <ImageGallery
        id="galleryContainer"
        className="galleryContainer"
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        ref={galleryRef}
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
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            className="image-gallery-icon image-gallery-fullscreen-button"
            onClick={() => {
              // onClick();
              // dimensions.isMobile && changeOrientation(isFullscreen);
              isFullscreen ? exitFullscreen() : enterFullscreen();
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
      {/* {showDialog && <Dialog onSuccess={enterFullscreen} src={dialogBackground} />} */}
    </>
  );
};

export default Gallery;
