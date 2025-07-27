import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';
import AdminPage from '../pages/AdminPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="logo">
          <a href="/">📸 PhotoReddit</a>
        </div>
        <input type="text" className="search-bar" placeholder="Search photos..." />
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;