import React from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/robotcard";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot) => (
        <RobotCard key={robot.id} {...robot} />
      ))}
    </div>
  );
}

export default App;
