import React, { useState, useEffect, useCallback, useRef } from 'react';
import {} from '../../';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  routes,
  NO_MENU_ROUTE_KEY,
  tabletWidth,
  isScreenInPortrait,
  getScreenDimensions,
  EN,
  IT,
  MAP_TAG,
  RECYCLE_TAG,
} from '../../utils';
import { articlesTradizione, articlesViti, articlesCantine, articlesProdotti } from '../../assets';
import {
  Wrapper,
  Article,
  TextWrapper,
  Text,
  TitleWrapper,
  Title,
  SubTitle,
  Img,
  ImgBkg,
  ImgMap,
} from './styled';
import './style.css';

const Articles = ({ lang }) => {
  const { pathname, hash } = useLocation();
  const dimensions = getScreenDimensions();
  const {
    height,
    width,
    isPortrait,
    isMini,
    isMobile,
    isTablet,
    isSmallScreen,
    isMediumScreen,
    isBigScreen,
  } = dimensions;
  const defaultProps = {
    ismini: isMini ? 1 : 0,
    ismobile: isMobile ? 1 : 0,
    istablet: isTablet ? 1 : 0,
    issmallscreen: isSmallScreen ? 1 : 0,
    ismediumscreen: isMediumScreen ? 1 : 0,
    isbigscreen: isBigScreen ? 1 : 0,
    isportrait: isScreenInPortrait(),
  };
  const mapRef = useRef(null);
  const recycleRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (pathname.includes(MAP_TAG)) {
      if (scrolling) return;
      setScrolling(true);
      setTimeout(() => {
        const top = document.querySelector(`#${MAP_TAG}`).getBoundingClientRect().top;
        document.documentElement.scroll(0, top);

        // if (mapRef && mapRef.current) {
        //   mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // } else {
        //   document
        //     .querySelector(`#${MAP_TAG}`)
        //     .scrollIntoView({ behavior: 'smooth', block: 'center' });
        // }
      }, 500);
    }
    if (pathname.includes(RECYCLE_TAG)) {
      if (scrolling) return;
      setScrolling(true);
      setTimeout(() => {
        const top = document.querySelector(`#${RECYCLE_TAG}`).getBoundingClientRect().top;
        document.documentElement.scroll(0, top);
        // if (recycleRef && recycleRef.current) {
        //   recycleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // } else {
        //   document
        //     .querySelector(`#${RECYCLE_TAG}`)
        //     .scrollIntoView({ behavior: 'smooth', block: 'center' });
        // }
      }, 500);
    }
  }, [scrolling]);

  const getHeigth = useCallback(
    type => {
      // prodotti contains only fullwidth images
      if (['img', 'map', 'recycle'].includes(type)) return 'auto';

      // in portrait tutti i conteniotori dei testi vanno in auto
      if (['txt'].includes(type) && isPortrait) return 'auto';

      const { innerWidth, innerHeight } = window;
      // vanno in auto anche i testi in landscape ma solo fino a dimensione Mobile Landscape (< 850 (tabletWidth))
      if (innerWidth < tabletWidth && !isPortrait && type === 'txt') return 'auto';

      const maxDim = innerWidth > innerHeight ? innerWidth : height;
      const minDim = innerWidth < innerHeight ? innerWidth : height;
      let resHeight = Math.round(Number(maxDim / 2 / 1.67));
      if (isPortrait) {
        resHeight = Math.round(Number(minDim / 1.67));
      } else {
        if (maxDim < tabletWidth) {
          resHeight = Math.round(Number(maxDim / 1.67));
        }
      }
      return `${resHeight}px`;
    },

    [width, height, isPortrait],
  );

  const getArticle = useCallback(() => {
    if (pathname.includes(routes.tradizione)) {
      if (lang === EN) {
        return articlesTradizione[EN];
      }
      return articlesTradizione[IT];
    } else if (pathname.includes(routes.viti)) {
      if (lang === EN) {
        return articlesViti[EN];
      }
      return articlesViti[IT];
    } else if (pathname.includes(routes.cantina)) {
      if (lang === EN) {
        return articlesCantine[EN];
      }
      return articlesCantine[IT];
    } else if (pathname.includes(routes.prodotti)) {
      if (lang === EN) {
        return articlesProdotti[EN];
      }
      return articlesProdotti[IT];
    }
    if (lang === EN) {
      return articlesTradizione[EN];
    }
    return articlesTradizione[IT];
  }, [pathname, lang]);

  const getOrderOfData = articleData => {
    if (isMini) return articleData.mobile;
    if (isMobile) {
      // fix per mettere la mappa del tablet in landscape mobile
      if (!isPortrait) {
        return articleData.tablet;
      }

      return articleData.mobile;
    }
    if (isTablet) {
      return articleData.tablet || articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = (el, elementId) => {
    const { type, src, title, subTitle, full, spaceTop, id } = el;
    const idToUse = id || elementId;
    defaultProps.height = getHeigth(type);
    return (
      <Article
        {...defaultProps}
        id={idToUse}
        key={idToUse}
        fullwidth={['map', 'recycle'].includes(type) ? 1 : 0}
        full={full}
      >
        {type === 'txt' && (
          <TextWrapper
            id={`${idToUse}_textWrapper`}
            key={`${idToUse}_textWrapper`}
            {...defaultProps}
          >
            {title && (
              <TitleWrapper {...defaultProps}>
                <Title src={title} />
              </TitleWrapper>
            )}
            {subTitle && <SubTitle src={subTitle} />}
            <Text
              id={`${idToUse}_text`}
              key={`${idToUse}_text`}
              style={{}}
              src={src || ''}
              {...defaultProps}
              className={isBigScreen && 'bigScreenText'}
              dangerouslySetInnerHTML={{ __html: src }}
            ></Text>
          </TextWrapper>
        )}
        {type === 'imgBck' && (
          <ImgBkg
            id={`${idToUse}_imgBkg`}
            key={`${idToUse}_imgBkg`}
            src={src}
            {...defaultProps}
            full={full}
          />
        )}
        {type === 'img' && (
          <Img
            id={`${idToUse}`}
            key={`${idToUse}_img`}
            src={src}
            {...defaultProps}
            full={full}
            spaceTop={spaceTop}
          />
        )}
        {type === 'map' && (
          <ImgMap
            ref={mapRef}
            id={`${idToUse}`}
            key={`${idToUse}_map`}
            src={src}
            {...defaultProps}
            className={isBigScreen && 'bigScreenMap'}
          />
        )}
        {type === 'recycle' && (
          <ImgMap
            ref={recycleRef}
            id={`${idToUse}`}
            key={`${idToUse}_recycle`}
            src={src}
            {...defaultProps}
            className={isBigScreen && 'bigScreenMap'}
          />
        )}
      </Article>
    );
  };

  return (
    <Wrapper>
      {getOrderOfData(getArticle()).map((el, index) => getComponent(el, `${index}_article`))}
    </Wrapper>
  );
};

export default Articles;
