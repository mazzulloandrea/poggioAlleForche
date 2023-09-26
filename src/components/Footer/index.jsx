import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils';
import { headerBkg, logo, marchio, dicitura } from '../../assets';
import {
  FooterStyled,
  Contacts,
  BackToHome,
  Grants,
  Logo,
  Marchio,
  Address,
  MapLink,
} from './styled';

const Footer = ({ dimensions }) => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tradizione);
  };

  const getLogo = (
    <BackToHome istablet={dimensions.isTablet ? 1 : 0}>
      <Logo src={logo} />
      <Marchio src={marchio} />
    </BackToHome>
  );

  const getContacs = (
    <Contacts istablet={dimensions.isTablet ? 1 : 0}>
      {/* <div>Indirizzo</div> */}
      {/* <br />
      <br /> */}
      <article>
        <p>Azienda agricola Poggio alle Forche di Turchi Lorenzo.</p>
        {/* <p>Podere Scarnacuoia 288, Montalcino (Siena) - Italia</p> */}
      </article>
      {/* <br /> */}
      {/* <article>
        <p>C.F. e PIVA iscrizione registro imprese Siena: xxxxxxx</p>
      </article> */}
    </Contacts>
  );

  const getAddress = (
    <Address istablet={dimensions.isTablet ? 1 : 0}>
      <article>
        <p>Podere Scarnacuoia 288, Montalcino (Siena) - Italia</p>
      </article>
    </Address>
  );

  const getMap = (
    <MapLink
      onClick={() => navigate(`${routes.prodotti}#map`)}
      istablet={dimensions.isTablet ? 1 : 0}
    >
      <article>
        <p>dove siamo</p>
      </article>
    </MapLink>
  );

  const getGrants = (
    <Grants istablet={dimensions.isTablet ? 1 : 0}>
      {/* <div>Contatti</div>
      <br />
      <br /> */}
      <article>
        <p>
          Email{' '}
          <a href="mailto:poggioalleforche@email.it" style={{ textDecoration: 'underline' }}>
            poggioalleforche@email.it{' '}
          </a>
        </p>
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
      src={headerBkg}
      ismobile={dimensions.isMobile ? 1 : 0}
      istablet={dimensions.isTablet ? 1 : 0}
      id="map"
    >
      {dimensions.isMobile ? (
        <>
          {getLogo}
          {getAddress}
          {getContacs}
          {getMap}
          {getGrants}
        </>
      ) : (
        <>
          {getAddress}
          {getContacs}
          {getLogo}
          {getMap}
          {getGrants}
        </>
      )}
    </FooterStyled>
  );
};

export default Footer;
