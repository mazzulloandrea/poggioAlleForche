import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../utils';
import { background, headerBkg, logo, marchio } from '../../assets';
import {
  FooterStyled,
  BackToHome,
  Address2,
  ContactContainer,
  Logo,
  Marchio,
  Address,
  Links,
  MapLink,
  VideoLink,
  Underline,
  ArticleText,
  Left,
  Right,
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
    <BackToHome
      istablet={dimensions.isTablet ? 1 : 0}
      ismobile={dimensions.isMobile ? 1 : 0}
      onClick={handleClickLogo}
    >
      <Logo src={logo} />
      <Marchio src={marchio} />
    </BackToHome>
  );

  const getAddress = (
    <Address istablet={dimensions.isTablet ? 1 : 0} ismobile={dimensions.isMobile ? 1 : 0}>
      <article>
        {dimensions.isMobile ? (
          <ArticleText ismobile={dimensions.isMobile ? 1 : 0}>
            Azienda agricola di Turchi Lorenzo.
          </ArticleText>
        ) : (
          <ArticleText>Azienda agricola Poggio alle Forche di Turchi Lorenzo.</ArticleText>
        )}
      </article>
    </Address>
  );

  const getAddress2 = (
    <Address2 istablet={dimensions.isTablet ? 1 : 0} ismobile={dimensions.isMobile ? 1 : 0}>
      <article>
        {dimensions.isMobile ? (
          <>
            <ArticleText ismobile={dimensions.isMobile ? 1 : 0}>
              Podere Scarnacuoia 288,{' '}
            </ArticleText>
            <ArticleText ismobile={dimensions.isMobile ? 1 : 0}>
              Montalcino (Siena) - Italia
            </ArticleText>
          </>
        ) : (
          <ArticleText ismobile={dimensions.isMobile ? 1 : 0}>
            Podere Scarnacuoia 288, Montalcino (Siena) - Italia
          </ArticleText>
        )}
      </article>
    </Address2>
  );

  const getLink = (
    <Links ismobile={dimensions.isMobile ? 1 : 0}>
      <MapLink
        onClick={event => {
          pathname === routes.prodotti
            ? (document.documentElement.scrollTop -= 300)
            : navigate(`${routes.prodotti}#map`);
          event.stopPropagation();
        }}
        istablet={dimensions.isTablet ? 1 : 0}
        ismobile={dimensions.isMobile ? 1 : 0}
      >
        <Underline ismobile={dimensions.isMobile ? 1 : 0}>Dove siamo</Underline>
      </MapLink>
      <VideoLink
        ismobile={dimensions.isMobile ? 1 : 0}
        onClick={event => {
          pathname === routes.tradizione
            ? (document.documentElement.scrollTop = 300)
            : navigate(`${routes.tradizione}#video`);
          event.stopPropagation();
        }}
      >
        <Underline ismobile={dimensions.isMobile ? 1 : 0}>Video</Underline>
      </VideoLink>
    </Links>
  );

  const getContact = (
    <ContactContainer istablet={dimensions.isTablet ? 1 : 0} ismobile={dimensions.isMobile ? 1 : 0}>
      <article>
        <ArticleText ismobile={dimensions.isMobile ? 1 : 0}>
          Contatti
          <br />
          <a href="mailto:poggioalleforche@email.it" style={{ textDecoration: 'underline' }}>
            poggioalleforche@email.it{' '}
          </a>
        </ArticleText>
      </article>
    </ContactContainer>
  );

  return (
    <FooterStyled
      src={dimensions.isMobile ? background : headerBkg}
      ismobile={dimensions.isMobile ? 1 : 0}
      istablet={dimensions.isTablet ? 1 : 0}
      isportrait={dimensions.isPortrait ? 1 : 0}
      id="map"
    >
      {dimensions.isMobile ? (
        <>
          <Left ismobile={dimensions.isMobile ? 1 : 0} isportrait={dimensions.isPortrait ? 1 : 0}>
            {getLogo}
            {getAddress}
            {getAddress2}
          </Left>
          <Right ismobile={dimensions.isMobile ? 1 : 0} isportrait={dimensions.isPortrait ? 1 : 0}>
            {getContact}
            {getLink}
          </Right>
        </>
      ) : (
        <>
          {getAddress}
          {getAddress2}
          {getLogo}
          {getLink}
          {getContact}
        </>
      )}
    </FooterStyled>
  );
};

export default Footer;
