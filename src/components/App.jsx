import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors'

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
  const dispatch = useDispatch();

  const isRefgeshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return (
      isRefgeshing 
      ? 
        <>Refreshing user ...</>
      : 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={ <RestrictedRoute redirectTo={'/contacts'} component={<RegisterPage />} /> }
            />
            <Route
              path="/login"
              element={ <RestrictedRoute redirectTo={'/contacts'} component={<LoginPage />} /> }
            />
            <Route
              path="/contacts"
              element={ <PrivateRoute redirectTo={'/login'} component={<ContactsPage />} /> }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  );
}

export { App as default }