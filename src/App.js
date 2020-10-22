import React from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/card/card-robot";

const App = () => {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>

      <RobotCard />
      {/* {data.map(robot => ...)} */}
    </div>
  );
};

export default App;
