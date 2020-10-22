import React, { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [following, setFollowing] = useState([]);
  data.sort((a, b) => a.last_name - b.last_name)
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="robot-images-container">
        {data.map((robot) => {
          let robotName = robot.first_name + " " + robot.last_name;
          let buttonValue;
          if (following.indexOf(robotName) !== -1){
            buttonValue = "Following";
          } else {
            buttonValue = "Follow";
          }        
          return (
            <div
              className="robot-card-container"
              key={robot.id}
              value={robotName}
            >
              <div className="image-container">
                <img className="robot-image" src={robot.avatar} />
              </div>
              <div className="robot-name">{robotName}</div>
              <div className="follow-button-container">
                <button
                  className="follow-button"
                  value={robotName}
                  onClick={(e) => {
                    if (following.indexOf(e.target.value) !== -1){
                      let newArray = following.filter(robotName => robotName != e.target.value);
                      setFollowing(newArray);
                    } else {
                      setFollowing([...following, e.target.value])
                    }
                  }}
                >
                  {buttonValue}
                </button>
              </div>
              <div className="robot-title">{robot.title}</div>
              <div className="robot-email">{robot.email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
