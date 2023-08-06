import React from 'react';
import { routes } from '../../utils';
import { background, logo, marchio, dicitura } from '../../assets';
import { FooterStyled, Contacts, BackToHome, Grants, Logo, Marchio } from './styled';

const Footer = ({ dimensions }) => {
  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tradizione);
  };

  return (
    <>
      <FooterStyled src={background} ismobile={dimensions.isMobile ? 1 : 0}>
        <Contacts>
          <div>Contatti:</div>
          <article>
            <p>Azienda agricola Poggio alle Forche di Turchi Lorenzo.</p>
            <p>Podere Scarnacuoia 288, Montalcino (Siena) - Italia</p>
          </article>
          <br />
          <article>
            <p>C.F. e PIVA iscrizione registro imprese Siena: xxxxxxx</p>
          </article>
        </Contacts>
        <BackToHome>
          <Logo src={logo} />
          <Marchio src={marchio} />
        </BackToHome>
        <Grants />
      </FooterStyled>
    </>
  );
};

export default Footer;
