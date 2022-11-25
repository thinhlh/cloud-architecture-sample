import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AuthFrame from './auth-frame/AuthFrame';
import AuthForm from './auth/AuthForm';
import ErrorPage from './error/Error';
import ForgotPassword from './forgot-password/ForgotPassword';

function App() {

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthFrame child={<AuthForm />} />,
    },
    {
      path: '/forgot-password',
      element: <AuthFrame child={<ForgotPassword />} />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }], {

  });

  return (
    <RouterProvider router={router} />
  );
}

export default App;
