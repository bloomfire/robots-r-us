import React from "react";
import style from "./style.module.scss";
import * as R from "ramda";

import RobotCard from "./RobotCard";

import robotData from "../../robotData";

export default () => {
  const renderRobotData = () => {
    const sortedRobotData = R.sort(R.ascend(R.prop("last_name")), robotData);

    return R.map(
      robot => <RobotCard key={robot.id} robot={robot} />,
      sortedRobotData
    );
  };

  return (
    <div className={style.home}>
      <h1 className={style.homeHeader}>Robots-R-Us</h1>
      <div className={style.robotGrid}>{renderRobotData()}</div>
    </div>
  );
};
