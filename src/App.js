import React, { Fragment } from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './App.css';

function App(){
  return (
    <Fragment>
      <Header />
      <div className="container-post">
        <PostList />
      </div>
    </Fragment>
  );
}

export default App;