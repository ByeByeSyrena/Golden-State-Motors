import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';

import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
