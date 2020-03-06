import React, { Fragment } from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './App.css';

function App(){
  return (
    <div className="app-container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;