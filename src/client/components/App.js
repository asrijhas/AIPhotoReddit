import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="logo">Logo</div>
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
      <div className="body-container">
        <div className="sidebar">
          {/* Sidebar content will go here */}
        </div>
        <div className="main-content">
          <header className="App-header">
            <h1>Hello, World!</h1>
            <p>Welcome to AIPhotoReddit</p>
          </header>
          {/* Other main content will go here */}
        </div>
      </div>
    </div>
  );
}

export default App;