import React from 'react';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-section">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
