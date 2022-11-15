import { GlobalStyles } from 'components/GlobalStyles';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import Layout from 'components/Layout';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'))
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo={'/contacts'} component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo={'/contacts'} component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo={'/login'} component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <GlobalStyles />
    </>
  );
}

export { App as default }