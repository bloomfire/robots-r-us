import React from 'react';
import data from './data';
import './App.css';
import RobotCard from './robotCard'
import 'primeflex/primeflex.css';


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

  const background = {
    backgroundColor: 'lightgreen'
  }

  const searchStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5px",
    border: '5px',
    margin: '10px',
  }

  return (
    <div className="App" style={background}>
      <h1>Robots-R-Us</h1>
      <div
      className="p-grid"
      style={searchStyle}>
      {cardMarkup}
      </div>
    </div>
  );
}

export default App;
