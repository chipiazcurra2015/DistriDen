import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from '../src/Redux/Store/store.js';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
