import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../utils';
import { background, headerBkg, logo, marchio } from '../../assets';
import {
  FooterStyled,
  Contacts,
  BackToHome,
  Grants,
  Logo,
  Marchio,
  Address,
  Links,
  MapLink,
  VideoLink,
  Underline,
  ArticleText,
} from './styled';

const Footer = ({ dimensions }) => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const handleClickLogo = () => {
    document.documentElement.scrollTop = 0;
    if (['/', '/tradizione'].includes(pathname)) return null;
    return navigate(routes.tradizione);
  };

  const getLogo = (
    <BackToHome istablet={dimensions.isTablet ? 1 : 0} onClick={handleClickLogo}>
      <Logo src={logo} />
      <Marchio src={marchio} />
    </BackToHome>
  );

  const getContacs = (
    <Contacts istablet={dimensions.isTablet ? 1 : 0}>
      <article>
        <ArticleText>Podere Scarnacuoia 288, Montalcino (Siena) - Italia</ArticleText>
      </article>
    </Contacts>
  );

  const getAddress = (
    <Address istablet={dimensions.isTablet ? 1 : 0}>
      <article>
        <ArticleText>Azienda agricola Poggio alle Forche di Turchi Lorenzo.</ArticleText>
      </article>
    </Address>
  );

  const getLink = (
    <Links>
      <MapLink
        onClick={event => {
          pathname === routes.prodotti
            ? (document.documentElement.scrollTop -= 300)
            : navigate(`${routes.prodotti}#map`);
          event.stopPropagation();
        }}
        istablet={dimensions.isTablet ? 1 : 0}
      >
        <Underline>dove siamo</Underline>
      </MapLink>
      <VideoLink
        onClick={event => {
          pathname === routes.tradizione
            ? (document.documentElement.scrollTop = 300)
            : navigate(`${routes.tradizione}#video`);
          event.stopPropagation();
        }}
      >
        <Underline>video</Underline>
      </VideoLink>
    </Links>
  );

  const getGrants = (
    <Grants istablet={dimensions.isTablet ? 1 : 0}>
      <article>
        <ArticleText>
          Contatti
          <br />
          <a href="mailto:poggioalleforche@email.it" style={{ textDecoration: 'underline' }}>
            poggioalleforche@email.it{' '}
          </a>
        </ArticleText>
      </article>
      {/* <br />
      <article>
        <p>
          Phone{' '}
          {dimensions.isTablet ? (
            <a href="tel:333 3456 789" style={{ textDecoration: 'underline' }}>
              333 3456 789
            </a>
          ) : (
            <span>333 3456 789</span>
          )}
        </p>
      </article> */}
    </Grants>
  );

  return (
    <FooterStyled
      src={dimensions.isMobile ? background : headerBkg}
      ismobile={dimensions.isMobile ? 1 : 0}
      istablet={dimensions.isTablet ? 1 : 0}
      id="map"
    >
      {dimensions.isMobile ? (
        <>
          {getLogo}
          {getAddress}
          {getContacs}
          {getLink}
          {getGrants}
        </>
      ) : (
        <>
          {getAddress}
          {getContacs}
          {getLogo}
          {getLink}
          {getGrants}
        </>
      )}
    </FooterStyled>
  );
};

export default Footer;
