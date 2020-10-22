import data from './data';
import React, { useEffect }  from 'react';
import Robot from './robot';
import { sortBy } from 'lodash';
import './App.css';

function App() {
  useEffect(() => {
    // out of time, but one way of storing the which robots have been followed and unfollowed is to use local storage
    // basically stringify the data and add a property of isFollowing which then can be set to true or false
    // this would be manipuled in the robot.js file
    localStorage.setItem('data', JSON.stringify(data))
  });

  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Robots-R-Us</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {sortBy(data, ['last_name']).map(robot =>
        <Robot {...robot} key={robot.id}/>
        )}
      </div>
    </div>
  );
}

export default App;
