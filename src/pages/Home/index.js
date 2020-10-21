import React from "react";
import style from "./style.module.scss";
import * as R from "rambda";

import RobotCard from "./RobotCard";

import robotData from "../../robotData";

export default () => {
  const renderRobotData = () => {
    return R.map(robot => <RobotCard robot={robot} />, robotData);
  };

  return (
    <div className={style.home}>
      <h1 className={style.homeHeader}>Robots-R-Us</h1>
      <div className={style.robotGrid}>{renderRobotData()}</div>
    </div>
  );
};
