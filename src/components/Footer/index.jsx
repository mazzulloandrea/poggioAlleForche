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
          <div>Indirizzo</div>
          <br />
          <br />
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
        <Grants>
          <div>Contatti</div>
          <br />
          <br />
          <article>
            <p>
              Email{' '}
              <a href="mailto:poggioalleforche@email.it" style={{ textDecoration: 'underline' }}>
                poggioalleforche@email.it{' '}
              </a>
            </p>
          </article>
          <br />
          <article>
            <p>
              Phone{' '}
              {dimensions.isMobile ? (
                <a href="tel:333 3456 789" style={{ textDecoration: 'underline' }}>
                  333 3456 789
                </a>
              ) : (
                <span>333 3456 789</span>
              )}
            </p>
          </article>
        </Grants>
      </FooterStyled>
    </>
  );
};

export default Footer;
