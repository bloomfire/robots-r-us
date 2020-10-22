import React from 'react';
import data from './data';
import './App.css';

function App() {
  return (
    <div 
      className="App" 
    >
      <h1>Robots-R-Us</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px 15px",
        }} 
      >
        {data.map(
          (robot) => {
            return (
              <div 
                id={robot.id}
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid black",
                  display: "inline-block",
                  margin: "10px"
                }}
              >
                <img src={robot.avatar}></img><br></br>
                {robot.first_name}&nbsp;{robot.last_name}<br></br>
                {robot.email}<br></br>

                {robot.title}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
