import React from 'react';
import data from './data';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map(robot => (<Employee robot={robot}/>))}
    </div>
  );
}

export default App;
