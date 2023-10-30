import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, isScreenInPortrait } from '../../utils';
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
  Center,
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
      isportrait={isScreenInPortrait()}
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
          <ArticleText istablet={dimensions.isTablet ? 1 : 0}>
            Azienda agricola Poggio alle Forche di Turchi Lorenzo.
          </ArticleText>
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
          <ArticleText istablet={dimensions.isTablet ? 1 : 0}>
            Podere Scarnacuoia 288, Montalcino (Siena) - Italia
          </ArticleText>
        )}
      </article>
    </Address2>
  );

  const reloadWorkaround = () => {
    const hash = window.location.hash;
    window.location.hash = '';
    window.location.hash = hash;
  };

  const getLink = (
    <Links ismobile={dimensions.isMobile ? 1 : 0}>
      {/* <Link to={`${routes.prodotti}#map`}> */}
      <MapLink
        onClick={event => {
          pathname === routes.prodotti ? reloadWorkaround() : navigate(`${routes.prodotti}#map`);
          event.stopPropagation();
        }}
        istablet={dimensions.isTablet ? 1 : 0}
        ismobile={dimensions.isMobile ? 1 : 0}
      >
        <Underline ismobile={dimensions.isMobile ? 1 : 0}>Dove siamo</Underline>
      </MapLink>
      {/* </Link> */}
      <VideoLink
        ismobile={dimensions.isMobile ? 1 : 0}
        onClick={event => {
          pathname === routes.tradizione
            ? reloadWorkaround()
            : navigate(`${routes.tradizione}#video`);
          event.stopPropagation();
        }}
      >
        <Underline ismobile={dimensions.isMobile ? 1 : 0}>Video</Underline>
      </VideoLink>
    </Links>
  );

  const getContact = (
    <ContactContainer
      isportrait={isScreenInPortrait()}
      istablet={dimensions.isTablet ? 1 : 0}
      ismobile={dimensions.isMobile ? 1 : 0}
    >
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

  const getMobile = () => {
    if (isScreenInPortrait()) {
      return mobilePortrait;
    } else {
      return mobileLandscape;
    }
  };
  const mobilePortrait = (
    <>
      <Left ismobile={1} isportrait={1}>
        {getLogo}
        {getAddress}
        {getAddress2}
      </Left>
      <Right ismobile={1} isportrait={1}>
        {getContact}
        {getLink}
      </Right>
    </>
  );
  const mobileLandscape = (
    <>
      <Left ismobile={1} isportrait={0}>
        {getAddress}
        {getAddress2}
      </Left>
      <Center>{getLogo}</Center>
      <Right ismobile={1} isportrait={0}>
        {getContact}
        {getLink}
      </Right>
    </>
  );

  return (
    <FooterStyled
      src={dimensions.isMobile ? background : headerBkg}
      ismobile={dimensions.isMobile ? 1 : 0}
      istablet={dimensions.isTablet ? 1 : 0}
      isportrait={isScreenInPortrait()}
      id="map"
    >
      {dimensions.isMobile ? (
        getMobile()
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
