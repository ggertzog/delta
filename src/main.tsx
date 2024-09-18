import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App.tsx';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/index.scss';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
