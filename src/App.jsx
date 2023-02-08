import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css'
import Room from './component/Room';
import Kitchen from './component/Kitchen';
import Bedroom from './component/Bedroom';
import Lounge from './component/Lounge';

function App() {
  return (
    <div className="App">
      <h1>Smart Home Lighting</h1>
      <Kitchen/>
      <Bedroom/>
      <Lounge/>
    </div>
  );
}

export default App;
