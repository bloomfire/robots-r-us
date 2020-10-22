import React, { useState } from "react";
import styled from "styled-components";

import RobotCard from "./components/card/card-robot";

import data from "./data";
import "./App.css";
import colors from "./theme/colors";

const App = () => {
  const withFollowData = data.map((prevData) => ({ ...prevData, isFollowing: false }));
  const [robotData] = useState(withFollowData);
  return (
    <div className="App">
      <Title>Robots-R-Us</Title>
      <RobotCardWrapper>
        {robotData.map((robot) => (
          <RobotCard
            key={robot.id}
            firstName={robot.first_name}
            lastName={robot.last_name}
            avatar={robot.avatar}
            title={robot.title}
            email={robot.email}
            follow={robot.isFollowing}
          />
        ))}
      </RobotCardWrapper>
    </div>
  );
};

export const Title = styled.h1`
  color: ${colors.offWhite};
`;

const RobotCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default App;
