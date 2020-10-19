import React from 'react';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot, index) => 
        <ul>
          <ul key={index}> {robot.first_name} {robot.last_name}
      <p>{robot.title}</p>
      <p>{robot.email}</p>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default App;
