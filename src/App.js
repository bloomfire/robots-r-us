import React, { useState } from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/card/card-robot";

const App = () => {
  const [robotData] = useState(data);
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {robotData.map((robot) => (
        <RobotCard
          key={robot.id}
          firstName={robot.first_name}
          lastName={robot.last_name}
          avatar={robot.avatar}
          title={robot.title}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default App;
