import React from 'react';
import data from './data';
import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot) => {
        return <Card />;
      })}
    </div>
  );
}

export default App;
