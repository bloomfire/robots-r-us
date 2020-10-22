import React from 'react';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map(robot => {
        let robotName = robot.first_name + " " + robot.last_name;
        return (
          <div className="robot-card-container" key={robot.id} value={robotName}>
            <div className="image-container">
              <img src={robot.avatar}/>
            </div>
            <div className="robot-name">
              {robotName}
            </div>
            <div className="follow-button-container">
              <button className="follow-button">Follow</button>
            </div>
            <div className="robot-title">
              {robot.title}
            </div>
            <div className="email">
              {robot.email}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
