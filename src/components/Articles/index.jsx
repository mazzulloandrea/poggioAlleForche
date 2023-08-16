import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, tabletWidth } from '../../utils';
import {
  articlesTradizione,
  // articlesViti,
  // articlesCantine,
  // articlesTerritorio,
  logo,
} from '../../assets';
import {
  Wrapper,
  Article,
  TextWrapper,
  Text,
  TitleWrapper,
  Title,
  LogoStyled,
  SubTitle,
  ImgBkg,
} from './styled';

const Articles = ({ dimensions }) => {
  const { pathname } = useLocation();
  // const [mobileLayout, setMobileLayout] = useState(dimensions.width < 1700);

  // useEffect(() => {
  //   setMobileLayout(dimensions.width < 1700);
  // }, [dimensions.width]);

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
      // if (dimensions) {
      return articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = (el, id) => {
    const { type, src, title, subTitle } = el;
    const { isTablet, isMobile } = dimensions;
    const defaulProps = {
      istablet: isTablet ? 1 : 0,
      ismobile: isMobile ? 1 : 0,
    };
    return (
      <Article {...defaulProps} key={id}>
        {type === 'txt' && (
          <TextWrapper>
            {title && (
              <TitleWrapper {...defaulProps}>
                <Title dangerouslySetInnerHTML={{ __html: title }} {...defaulProps} />
                <LogoStyled src={logo} {...defaulProps} />
              </TitleWrapper>
            )}
            {subTitle && (
              <SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} {...defaulProps} />
            )}
            <Text id={id} style={{}} src={src || ''} {...defaulProps}>
              {src}
            </Text>
          </TextWrapper>
        )}
        {type === 'img' && <ImgBkg id={id} src={src} {...defaulProps} />}
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
