import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { routes } from './components/routes/routes';
import { Routes as RoutesEnum } from './models/routes';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to={RoutesEnum.PAGE_NOT_FOUND} />} />
      </Routes>
    </div>
  );
}

export default App;
