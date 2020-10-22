import React from 'react';
import data from './data';
import './App.css';

function App() {

  let cardMarkup = data.map((robot) => (
    <li>
    key={robot.id}
    name={robot.name}
    </li>
  ))


  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {cardMarkup}
    </div>
  );
}

export default App;
