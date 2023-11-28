import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { inject } from '@vercel/analytics';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);

reportWebVitals();
inject();