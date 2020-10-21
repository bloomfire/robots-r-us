import React from 'react';
import data from './data';
import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* title */}
      <h1>Robots-R-Us</h1>

        {/* render each robot's info to its own robot card using map func */}
      <div className="card-container">
        {data.map((robot) => {
          return <Card robotData={robot} key={robot.id} />;
        })}
      </div>

    </div>
  );
}

export default App;
