import React from "react";
import style from "./style.module.scss";

export default ({ robot }) => {
  return (
    <div className={style.robotCard}>
      <h1 className={style.robotName}>{robot.first_name}</h1>
    </div>
  );
};
