import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import UserPage from './pages/UserPage/UserPage';

import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
