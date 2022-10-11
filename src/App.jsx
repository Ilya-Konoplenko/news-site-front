import React from 'react';

import Header from './components/Header/Header';

import './app.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
