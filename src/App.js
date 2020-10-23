import React, { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/robotcard";
import { PageTitle, RobotGrid } from "./components/styledcomponents";

function App() {
  const [robots, setRobotFollow] = useState(() => {
    const returnedRobots = localStorage.getItem("robots");
    if (returnedRobots) {
      return JSON.parse(returnedRobots);
    }
    return {};
  });

  useEffect(() => {
    // console.log("value of RobotFollow array: ", robotFollow);
    localStorage.setItem("robots", JSON.stringify(robots));
  }, [robots]);

  return (
    <div className="App">
      <PageTitle>Robots-R-Us</PageTitle>
      <RobotGrid>
        {data.map((robot) => {
          const followCheck = true;

          return <RobotCard key={robot.id} {...robot} follow={followCheck} />;
        })}
      </RobotGrid>
    </div>
  );
}

export default App;
