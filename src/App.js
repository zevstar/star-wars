import React from 'react';
import SwApi from './services/sw-api';
import './App.css'

const App = () => {
  return (
    <div className = 'main'>
      <h1 id='header'>STAR WARS STARSHIPS</h1>
      <SwApi />
    </div>
  );
}

export default App;


