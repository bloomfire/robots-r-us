import React, { useState } from "react";
import styled from "styled-components";

import RobotCard from "./components/card/card-robot";

import data from "./data";
import "./App.css";

const App = () => {
  const [robotData] = useState(data);
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <RobotCardWrapper>
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
      </RobotCardWrapper>
    </div>
  );
};

const RobotCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default App;
