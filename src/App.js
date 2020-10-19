import React from 'react';
import data from './data';
import './App.css';
import { render } from '@testing-library/react';

function App() {
 function handleClick(e) {
  e.preventDefault();
  //Button works but only on one follow.
  var elem = document.getElementById("followButton");
  if(elem.innerHTML === 'Follow'){
    elem.innerHTML = 'Following'
  }else
    elem.innerHTML = 'Follow'
  }
    return (
      <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot, index) => 
        <ul class='robots'>
          <ul class='robot' key={index}> 
            <img id='avatar' src={robot.avatar ? robot.avatar : null} alt=''></img>
            <p>
            <button id='followButton' onClick={handleClick}>Follow</button>
            </p>
            <p id='name'>{robot.first_name} {robot.last_name} </p>
            <p id='title'>{robot.title}</p>
            <p id='email'>{robot.email}</p>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default App;
