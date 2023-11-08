import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { COOKIE_NAME } from '../../utils';

const CookieComponent = ({ setCookie }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName={COOKIE_NAME}
      style={{ background: '#2B373B' }}
      buttonStyle={{ background: '#FFFFFF', color: '#4e503b', fontSize: '13px' }}
      expires={1}
      onAccept={acceptedByScrolling => {
        setCookie(true);
      }}
    >
      This website uses cookies to enhance the user experience.{' '}
    </CookieConsent>
  );
};

export default CookieComponent;
