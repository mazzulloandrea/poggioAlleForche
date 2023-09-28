import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, tabletWidth } from '../../utils';
import { articlesTradizione, articlesViti, articlesCantine, articlesProdotti } from '../../assets';
import {
  Wrapper,
  Article,
  TextWrapper,
  Text,
  TitleWrapper,
  Title,
  SubTitle,
  ImgBkg,
  ImgMap,
} from './styled';
import './style.css';

const Articles = ({ dimensions }) => {
  const { pathname, hash } = useLocation();
  const mapRef = useRef(null);

  /** workaround Tablet to force transition */
  // useEffect(() => {
  //   if (dimensions && dimensions.isTablet) {
  //     const sephia = document.getElementById('sephia');
  //     const colored = document.getElementById('colored');
  //     setTimeout(() => {
  //       sephia && sephia.classList.add('forceAnimation');
  //       colored && colored.classList.add('forceAnimation');
  //     }, 2000);
  //   }
  // }, []);

  useEffect(() => {
    if (hash === '#map') {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  const getArticle = useCallback(() => {
    switch (pathname) {
      case '/tradizione':
        return articlesTradizione;
      case '/cantina':
        return articlesCantine;
      case '/viti':
        return articlesViti;
      case '/prodotti':
        return articlesProdotti;
      default:
        return articlesTradizione;
    }
  }, [pathname]);

  const getLayout = articleData => {
    if (dimensions && dimensions.isMobile) {
      // fix per mettere la mappa del tablet in landscape mobile
      if (!dimensions.isPortrait) {
        return articleData.tablet;
      }

      return articleData.mobile;
    }
    if (dimensions && dimensions.isTablet) {
      return articleData.tablet || articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = (el, id) => {
    const { type, src, title, subTitle } = el;
    const { isMobile, isTablet, isSmallScreen, isMediumScreen, isBigScreen, isPortrait } =
      dimensions;
    const defaulProps = {
      ismobile: isMobile ? 1 : 0,
      istablet: isTablet ? 1 : 0,
      issmallscreen: isSmallScreen ? 1 : 0,
      ismediumscreen: isMediumScreen ? 1 : 0,
      isbigscreen: isBigScreen ? 1 : 0,
      isportrait: isPortrait ? 1 : 0,
    };
    return (
      <Article {...defaulProps} key={id} fullwidth={type === 'map' ? 1 : 0}>
        {type === 'txt' && (
          <TextWrapper>
            {title && (
              <TitleWrapper {...defaulProps}>
                <Title src={title} />
              </TitleWrapper>
            )}
            {subTitle && <SubTitle src={subTitle} />}
            <Text
              id={id}
              style={{}}
              src={src || ''}
              {...defaulProps}
              className={isBigScreen && 'bigScreenText'}
            >
              {src}
            </Text>
          </TextWrapper>
        )}
        {type === 'img' && <ImgBkg id={id} src={src} {...defaulProps} />}
        {type === 'map' && (
          <ImgMap
            ref={mapRef}
            id="map"
            src={src}
            {...defaulProps}
            className={isBigScreen && 'bigScreenMap'}
          />
        )}
      </Article>
    );
  };

  return (
    <Wrapper>
      {getLayout(getArticle()).map((el, index) => getComponent(el, `${index}_article`))}
    </Wrapper>
  );
};

export default Articles;
