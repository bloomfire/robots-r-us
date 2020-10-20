import React from 'react';
import data from './data';
import './App.css';
import Robot from './Robot';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>


      {data.map(robot => <Robot robot={robot} key={robot.id}/>)}


    </div>
  );
}

export default App;
