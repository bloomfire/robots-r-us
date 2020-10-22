import React, { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const handleFollow = (e) => {
    
  }
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="container">
      {data.map(robot => 
      <div className="wrapper">
        <div className="card" style={{width: "14rem"}}>
          <div className="img-wrapper"
          style={{backgroundImage: `url( ${robot.avatar ? robot.avatar :  'https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png'}`}}
          >
            {/* <img src={robot.avatar ? robot.avatar : '/> */}
          </div>
          <div className="card-body">
            <h5 className="card-title">{robot.first_name} {robot.last_name}</h5>
            <p className="card-text">{robot.title ? robot.title : '-'}</p>
            <p className="card-text">{robot.email ? robot.email : '-'}</p>
            <a href="#" className="btn btn-primary" onClick={handleFollow}>{robot.email ? 'Following' : 'Follow'}</a>
          </div>
        </div>
      </div>
        )}
      </div>
    </div>
  );
}

export default App;
