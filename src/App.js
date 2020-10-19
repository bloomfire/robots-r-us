import React from 'react';
import data from './data';
import './App.css';
import { render } from '@testing-library/react';

function App() {
 function handleClick() {
    console.log('this is:', this);
  }
    return (
      <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot, index) => 
        <ul>
          <ul key={index}> 
          <img src={robot.avatar ? robot.avatar : null} alt=''></img>
          <p>
          <button>Follow</button>
          </p>
          <p>{robot.first_name} {robot.last_name} </p>
            <p>{robot.title}</p>
            <p>{robot.email}</p>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default App;
