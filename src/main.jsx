import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './library/i18next/i18n.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import {NextUIProvider} from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
