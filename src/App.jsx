import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </>
  );
}

export default App;
