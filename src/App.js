import React, { useState } from 'react';
import data from './data';
import './App.css';
const defaultAvatar = 'https://purepng.com/public/uploads/medium/purepng.com-futurama-benderfuturamaanimated-sciencefictionsitcomcartoonfuturama-benderbender-1701528563136my4l2.png';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="Robots-container">
        {data.map((robot, index) => {
          return(
            <div className="Robot-container" key={index}>
              <img
                className="Robot-avatar"
                alt="avatar"
                src={robot.avatar ? robot.avatar : defaultAvatar}
              />
              <p className="Robot-name">{robot.first_name} {robot.last_name}</p>
              <button className={"Follow-button"}>
                Follow
              </button>
              <p className="Robot-title">{robot.title}</p>
              <p className="Robot-email">{robot.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
