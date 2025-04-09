import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Page from './components/Page';
import ButtonGroup from './components/ButtonGroup';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
    <ButtonGroup />
  </StrictMode>
);
