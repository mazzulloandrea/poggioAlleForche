import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, tabletWidth } from '../../utils';
import {
  articlesTradizione,
  // articlesViti,
  // articlesCantine,
  // articlesTerritorio,
} from '../../assets';
import { Wrapper, Article, TextWrapper, Text, Title, SubTitle, ImgBkg } from './styled';

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
    return (
      <Article mobilelayout={dimensions.isTablet ? 1 : 0}>
        {type === 'txt' && (
          <TextWrapper>
            {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
            {subTitle && <SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />}
            <Text id={id} style={{}} src={src || ''}>
              {src}
            </Text>
          </TextWrapper>
        )}
        {type === 'img' && <ImgBkg id={id} src={src} />}
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
