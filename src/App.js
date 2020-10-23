import React from 'react';
import data from './data';
import './App.css'
import Follow from './components/Follow'

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
        {data.map(robot => (
          <div key={robot.id} style={{ margin: '30px' }}>
          <div>{`First Name: ${robot.first_name}`}</div>
          <div>{`Last Name: ${robot.last_name}`}</div>
          <div>{`Email: ${robot.email}`}</div>
          <div>{`Title: ${robot.title}`}</div>
          <img src= {robot.avatar} />
          <div>
          <Follow />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
