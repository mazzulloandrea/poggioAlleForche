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
  Img,
  ImgBkg,
  ImgMap,
} from './styled';
import './style.css';

const Articles = ({ dimensions }) => {
  const { pathname, hash } = useLocation();
  const mapRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (hash === '#map') {
      if (scrolling) return;
      setScrolling(true);
      // window.mp = mapRef.current;
      setTimeout(() => mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
    }
  }, [scrolling]);

  const getArticle = useCallback(() => {
    switch (pathname) {
      case '/tradizione':
        return articlesTradizione;
      case '/viti':
        return articlesViti;
      case '/cantina':
        return articlesCantine;
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
    const { type, src, title, subTitle, full, spaceTop } = el;
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
      <Article {...defaulProps} key={id} fullwidth={type === 'map' ? 1 : 0} full={full}>
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
              dangerouslySetInnerHTML={{ __html: src }}
            ></Text>
          </TextWrapper>
        )}
        {type === 'imgBck' && <ImgBkg id={id} src={src} {...defaulProps} full={full} />}
        {type === 'img' && (
          <Img id={id} src={src} {...defaulProps} full={full} spaceTop={spaceTop} />
        )}
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
