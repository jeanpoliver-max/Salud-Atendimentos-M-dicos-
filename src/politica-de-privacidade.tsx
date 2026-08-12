import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PoliticaDePrivacidadeApp from './PoliticaDePrivacidadeApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PoliticaDePrivacidadeApp />
  </StrictMode>
);
