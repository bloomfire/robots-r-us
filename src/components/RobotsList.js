import React from "react";
import Robot from "./Robot";

const RobotsList = ({ botData }) => (
  <div className="robotsList">
    {botData.map((bot) => {
      <Robot key={bot.id} bot={bot} />;
    })}
  </div>
);

export default RobotsList;
