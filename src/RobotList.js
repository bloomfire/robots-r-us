import React from "react";
import data from "./data";
import "./App.css";

const RobotList = () => {
  return (
    <div className="App">
      {data.map((robot) => {
        return <div>{robot.first_name}</div>;
      })}
    </div>
  );
};

export default RobotList;
