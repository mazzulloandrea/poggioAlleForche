import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';

import App from './App';
import './index.css';
import './i18n';

ReactGA.initialize('G-X9RYMQ03VJ');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
