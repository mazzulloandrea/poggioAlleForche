import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, tabletWidth } from '../../utils';
import {
  articlesTradizione,
  articlesViti,
  articlesCantine,
  articlesVini,
  // logo,
} from '../../assets';
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

const Articles = ({ dimensions }) => {
  const { pathname, hash } = useLocation();
  const mapRef = useRef(null);

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
      case '/vini':
        return articlesVini;
      default:
        return articlesTradizione;
    }
  }, [pathname]);

  const getLayout = articleData => {
    if (dimensions && dimensions.isTablet) {
      return articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = (el, id) => {
    const { type, src, title, subTitle } = el;
    const { isTablet, isMobile, isBigScreen } = dimensions;
    const defaulProps = {
      istablet: isTablet ? 1 : 0,
      ismobile: isMobile ? 1 : 0,
      isbigscreen: isBigScreen ? 1 : 0,
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
            <Text id={id} style={{}} src={src || ''} {...defaulProps}>
              {src}
            </Text>
          </TextWrapper>
        )}
        {type === 'img' && <ImgBkg id={id} src={src} {...defaulProps} />}
        {type === 'map' && <ImgMap ref={mapRef} id="map" src={src} {...defaulProps} />}
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
