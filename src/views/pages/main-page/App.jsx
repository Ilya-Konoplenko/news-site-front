import './App.css';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';

function App() {
  const [posts] = useState([
    { id: 1, title: 'Breaking news', body: 'Meow' },
    { id: 2, title: 'Breaking news', body: 'Lorem Opus' },
    { id: 3, title: 'Breaking news', body: 'CCCCCC' },
    { id: 4, title: 'Breaking news', body: 'Meow' },
    { id: 5, title: 'Breaking news', body: 'Meow' },
  ]);

  return (
    <div className="app">
      <Header />
      <main className="main-section">
        {posts.map((post) => <Post post={post} />)}
      </main>
    </div>
  );
}

export default App;
