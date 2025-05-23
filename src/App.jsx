import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
