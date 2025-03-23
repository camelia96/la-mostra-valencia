// src/analytics.js
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-T3KPR81FJD'; // Reemplaza con tu ID de seguimiento

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path:any) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};