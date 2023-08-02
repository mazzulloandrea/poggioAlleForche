import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY, mobileWidth } from '../../utils';
import {
  articlesTenuta,
  articlesProdotti,
  articlesFamiglia,
  articlesTerritorio,
} from '../../assets';
import { Wrapper, Article, Text, Title, SubTitle, Img } from './styled';

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
        {type === 'img' && <Img id={id} src={src}></Img>}
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
