import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: 40 }}>
      <h1>Добро пожаловать!</h1>
      <p>
        <Link to="/onboarding">Перейти к онбордингу</Link>
      </p>
    </div>
  );
};

export default Home;
