import React from "react";
import data from "./data";
import Robot from "./Components/Robot";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot) => {
        return <Robot robot={robot} />;
      })}
    </div>
  );
}

export default App;
