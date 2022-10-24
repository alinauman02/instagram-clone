import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Login, Signup } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/signup', element: <Signup /> },
  { path: '/home', element: <App /> },
  { path: '/', element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
