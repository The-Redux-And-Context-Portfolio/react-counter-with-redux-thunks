/* node modules */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* app imports */
import App from './App';

/* build */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
