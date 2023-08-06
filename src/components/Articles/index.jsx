import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, mobileWidth } from '../../utils';
import {
  articlesTradizione,
  // articlesViti,
  // articlesCantine,
  // articlesTerritorio,
} from '../../assets';
import { Wrapper, Article, Text, Title, SubTitle, ImgBkg } from './styled';

const Articles = ({ dimensions }) => {
  const { pathname } = useLocation();

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
    if (dimensions.isMobile) {
      return articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = (el, id) => {
    const { type, src, title, subTitle } = el;
    return (
      <Article>
        {type === 'txt' && (
          <>
            {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
            {subTitle && <SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />}
            <Text id={id} style={{}} src={src || ''}>
              {src}
            </Text>
          </>
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
