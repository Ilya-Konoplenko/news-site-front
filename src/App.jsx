import React from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
