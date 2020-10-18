import React from "react";
import data from "./data";
import "./App.css";

const RobotList = () => {
  return (
    <div className="App">
      {data.map((robot) => {
        return (
          <div key={robot.id}>
            <div>
              {robot.first_name} {robot.last_name}
            </div>
            <div>{robot.email}</div>
            <img
              src={
                robot.avatar ? robot.avatar : "https://i.imgur.com/CsQIkSE.jpg"
              }
            ></img>
            <div>{robot.title ? robot.title : "No Purpose Yet Defined"}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RobotList;
