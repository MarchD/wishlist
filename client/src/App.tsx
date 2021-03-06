import React, { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/Header';
import { routes } from './routes';
import { Routes as RoutesEnum } from './models/routes';
import { light } from './themes';
import ModalManager from './components/modals/ModalManager';

function App() {
  /* Here will be dark mode */
  const theme = light;

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <ModalManager />
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.component} key={route.path} />
          ))}
          <Route path="*" element={<Navigate to={RoutesEnum.PAGE_NOT_FOUND} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
