import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries, background } from '../../assets';
import { Player } from 'video-react';
import { PlayerContainer } from './styled';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'; // gallery css
import '../../../node_modules/video-react/dist/video-react.css'; // video css
import './style.css';

const Gallery = ({ dimensions }) => {
  const { pathname, hash } = useLocation();
  const [loadedGif, setLoadedGif] = useState(false);
  // const [loadedVideo, setLoadedVideo] = useState(false);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  const swipeToVideo = useEffect(() => {
    if (hash === '#video' && galleryRef) {
      window.gr = galleryRef;
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setTimeout(() => galleryRef.current.slideToIndex(1), 1000);
    }
  }, [hash, galleryRef]);

  const renderVideo = videoSrc => {
    console.log(galleryRef);
    return (
      <>
        <img src={background} />
        {videoSrc && (
          <PlayerContainer>
            <Player>
              <source src={videoSrc} />
            </Player>
          </PlayerContainer>
        )}
      </>
    );
  };

  const images = useMemo(() => {
    let galleriesName = pathname.substring(1, pathname.length);
    if (!galleries[galleriesName]) galleriesName = 'tradizione';
    const list = galleries[galleriesName].list.map(el => ({ original: el }));
    const gif = galleries[galleriesName].gif;
    const videoSrc = galleries[galleriesName].video;

    if (['/', '/tradizione'].includes(pathname)) {
      // list[0] = { original: list[0], renderItem: () => renderVideo(list[0]) };
      list[1] = { original: list[1], renderItem: () => renderVideo(videoSrc) };
      // list[2] = { original: list[2], renderItem: () => renderVideo(list[2]) };
      // list[3] = { original: list[3], renderItem: () => renderVideo(list[3]) };
    }
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

  return (
    <div ref={containerRef}>
      <ImageGallery
        id="galleryContainer"
        className="galleryContainer"
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        showPlayButton={false}
        items={images.list}
        ref={galleryRef}
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
    </div>
  );
};

export default Gallery;
