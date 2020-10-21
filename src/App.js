import React, { useState } from "react";
import data from "./data";
import "./App.css";
import RobotsList from "../src/components/RobotsList";

const App = () => {
  const [botData, setBotData] = useState(data);

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <RobotsList />
    </div>
  );
};

export default App;
