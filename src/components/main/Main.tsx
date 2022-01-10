import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '../layout/container/Container';
// eslint-disable-next-line import/no-cycle
import { routes } from '../routes/routes';

function Main() {
  return (
    <Container size="lg">
      {routes.map((route) => (
        <p key={route.path}>
          <RouterLink to={route.path}>{route.label}</RouterLink>
        </p>
      ))}
    </Container>
  );
}

export default Main;
