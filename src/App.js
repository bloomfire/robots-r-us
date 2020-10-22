import data from './data';
import React from 'react';
import Robot from './robot';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.map(robot =>
        <Robot {...robot} />
        )}
      </div>
    </div>
  );
}

export default App;
