import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { galleries, background, playIcon } from '../../assets';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import { PlayerContainer, PlayerButton } from './styled';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'; // gallery css
import '../../../node_modules/video-react/dist/video-react.css'; // video css
import './style.css';

const Gallery = ({ dimensions }) => {
  const { isBigScreen, isMediumScreen, isSmallScreen, isTablet, isMobile, isPortrait } = dimensions;
  const { pathname, hash } = useLocation();
  const [loadedGif, setLoadedGif] = useState(false);
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  const swipeToVideo = useEffect(() => {
    if (hash === '#video' && galleryRef) {
      window.gr = galleryRef;
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setTimeout(() => galleryRef.current.slideToIndex(1), 1000);
    }
  }, [hash, galleryRef]);

  const renderVideo = useCallback(
    (videoSrc, backVideoImage) => {
      return (
        <>
          <img src={background} />
          {videoSrc && (
            <PlayerContainer
              isbigscreen={isBigScreen ? 1 : 0}
              ismediumscreen={isMediumScreen ? 1 : 0}
              issmallscreen={isSmallScreen ? 1 : 0}
              istablet={isTablet ? 1 : 0}
              ismobile={isMobile ? 1 : 0}
              isportrait={isPortrait ? 1 : 0}
            >
              <ReactPlayer
                ref={videoRef}
                url={videoSrc}
                controls={true}
                playing={{ playing }}
                width="100%"
                height="700px"
                light={<img src={backVideoImage.original.original} alt="" />}
                playIcon={
                  <img
                    src={playIcon}
                    alt=""
                    style={{ position: 'absolute', width: '30%', heigjt: 'auto' }}
                    onClick={() => {
                      setPlaying(true);
                    }}
                  />
                }
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
                // Disable right click
                onContextMenu={e => e.preventDefault()}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
            </PlayerContainer>
          )}
        </>
      );
    },
    [playing],
  );

  const images = useMemo(() => {
    let galleriesName = pathname.substring(1, pathname.length);
    if (!galleries[galleriesName]) galleriesName = 'tradizione';
    const list = galleries[galleriesName].list.map(el => ({ original: el }));
    const gif = galleries[galleriesName].gif;
    const videoSrc = galleries[galleriesName].video;

    if (['/', '/tradizione'].includes(pathname)) {
      list[1] = { original: list[1], renderItem: () => renderVideo(videoSrc, list[1]) };
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
      const gifElement = document.querySelector('.image-gallery-image');
      gifElement.src = images.gif;
      gifElement.parentElement.classList.add('grow');
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
    screen?.orientation?.lock('portrait');
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
              }, 400);
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
