import React, { useState, useEffect } from "react";
import styled from "styled-components";

import RobotCard from "./components/card/card-robot";

import data from "./data";
import "./App.css";
import colors from "./theme/colors";

const App = () => {
  const withFollowData = data.map((prevData) => ({ ...prevData, isFollowing: false }));
  const sortRobotData = withFollowData.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
  const [robotData, setRobotData] = useState(sortRobotData);

  useEffect(() => {
    const localData = localStorage.getItem("robot-data");

    if (localData) {
      setRobotData(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("robot-data", JSON.stringify(robotData));
  }, [robotData]);

  const handleFollow = (idx) => {
    setRobotData((robotData) =>
      robotData.map((item) => {
        if (item.isFollowing === false) {
          return item.id === idx + 1 ? { ...item, isFollowing: true } : item;
        }

        if (item.isFollowing === true) {
          return item.id === idx + 1 ? { ...item, isFollowing: false } : item;
        }

        return item;
      })
    );
  };

  return (
    <div className="App">
      <Title>Robots-R-Us</Title>
      <RobotCardWrapper>
        {robotData.map((robot, index) => (
          <RobotCard
            key={robot.id}
            firstName={robot.first_name}
            lastName={robot.last_name}
            avatar={robot.avatar}
            title={robot.title}
            email={robot.email}
            follow={robot.isFollowing}
            clickFollow={() => handleFollow(index)}
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
