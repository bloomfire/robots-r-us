import React from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/robotcard";
import { PageTitle, RobotGrid } from "./components/styledcomponents";

function App() {
  return (
    <div className="App">
      <PageTitle>Robots-R-Us</PageTitle>
      <RobotGrid>
        {data.map((robot) => (
          <RobotCard key={robot.id} {...robot} />
        ))}
      </RobotGrid>
    </div>
  );
}

export default App;
