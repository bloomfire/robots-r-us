import React from 'react';
import data from './data';
import './App.css';
import Employee from './Employee';

const App = () => (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="profile-container">
        {data.map(robot => (<Employee robot={robot}/>))}
      </div>
    </div>
);

export default App;
