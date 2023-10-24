import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactGA from 'react-ga';
import ReactGA from 'react-ga4';

import App from './App';
import './index.css';
import './i18n';

ReactGA.initialize('G-X9RYMQ03VJ');

// window.ga = ReactGA;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
