import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from 'apis/create-api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
