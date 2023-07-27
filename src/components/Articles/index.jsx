import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, mobileWidth } from '../../utils';
import {
  articlesTenuta,
  articlesProdotti,
  articlesFamiglia,
  articlesTerritorio,
} from '../../assets';
import { Wrapper, Article } from './styled';

const Articles = ({ dimensions }) => {
  const { pathname } = useLocation();

  const getArticle = useCallback(() => {
    switch (pathname) {
      case '/famiglia':
        return articlesFamiglia;
      case '/territorio':
        return articlesTerritorio;
      case '/prodotti':
        return articlesProdotti;
      default:
        return articlesTenuta;
    }
  }, [pathname]);

  const getLayout = articleData => {
    if (dimensions.isMobile) {
      return articleData.mobile;
    }
    return articleData.desktop;
  };

  const getComponent = ({ id, type, title, text, src }) => {
    return (
      <Article>
        {title && <article>{title}</article>}
        {type === 'text' && (
          <article id={id} style={{}} src={src || ''}>
            {text}
          </article>
        )}
        {type === 'img' && <img id={id} src={src}></img>}
      </Article>
    );
  };

  return <Wrapper>{getLayout(getArticle()).map(el => getComponent(el))}</Wrapper>;
};

export default Articles;
