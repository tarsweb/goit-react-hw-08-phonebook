import { GlobalStyles } from 'components/GlobalStyles';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';


const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={ <NotFoundPage />} />
        </Route >
      </Routes> 
      
      <GlobalStyles />
    </>
  )
}

export { App as default }