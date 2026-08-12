import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FuturosMedicosApp from './FuturosMedicosApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FuturosMedicosApp />
  </StrictMode>
);
