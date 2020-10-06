import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../views/_layouts/default';
import AuthLayout from '../views/_layouts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const user = useSelector((state) => state.login);
  let signed = false;

  if (user) {
    signed = true;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          {' '}
          <Component {...props} />{' '}
        </Layout>
      )}
    />
  );
}
