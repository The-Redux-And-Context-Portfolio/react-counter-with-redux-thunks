/* node modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

/* app imports */
import App from './App';
import createReduxStore from './redux-store/store';

/* build */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
