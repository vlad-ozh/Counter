import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.scss';
import { App } from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
