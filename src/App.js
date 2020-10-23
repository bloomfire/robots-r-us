import React, { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
import RobotCard from "./components/robotcard";
import { PageTitle, RobotGrid } from "./components/styledcomponents";

function App() {
  const [robots, setRobotsFollow] = useState(() => {
    const returnedRobots = localStorage.getItem("robots");
    if (returnedRobots) {
      return JSON.parse(returnedRobots);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("robots", JSON.stringify(robots));
  }, [robots]);

  function handleClick(e, id) {
    const newEntry = e;
    if (robots[id]) {
      const copy = { ...robots };
      delete copy[id];

      return setRobotsFollow({ ...copy });
    }
    return setRobotsFollow({ ...robots, ...newEntry });
  }

  const sortedArray = data.sort((a, b) => {
    const A = a.last_name;
    const B = b.last_name;
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="App">
      <PageTitle>Robots-R-Us</PageTitle>
      <RobotGrid>
        {sortedArray.map((robot) => {
          const followCheck =
            robot.last_name === robots[robot.id] ? true : false;

          return (
            <RobotCard
              key={robot.id}
              {...robot}
              follow={followCheck}
              clickHandler={(passed) => handleClick(passed, robot.id)}
            />
          );
        })}
      </RobotGrid>
    </div>
  );
}

export default App;
