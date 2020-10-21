import React from 'react';
import data from './data';
import './App.css';
import RobotProfileCard from './components/RobotProfileCard.js';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map(robot =>
        <RobotProfileCard
        id={robot.id}
        name={robot.first_name+" "+robot.last_name}
        email={robot.email}
        title={robot.title}
        avatar={robot.avatar}
        />
      )}
    </div>
  );
}

export default App;
