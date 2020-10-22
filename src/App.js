import React from 'react';
import data from './data';
import './App.css';
import RobotCard from './robotCard'

function App() {

  let cardMarkup = data.map((robot) => (
   <RobotCard
   key={robot.id}
   first_name={robot.first_name}
   last_name={robot.last_name}
   email={robot.email}
   title={robot.title}
   avatar={robot.avatar}
   />
  ))


  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {cardMarkup}
    </div>
  );
}

export default App;
