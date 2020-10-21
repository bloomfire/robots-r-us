import React, { useState } from "react";
import style from "./style.module.scss";

export default ({ robot }) => {
  let followedRobots = JSON.parse(localStorage.getItem("followedRobots"));
  const [isFollowing, setIsFollowing] = useState(
    followedRobots.includes(robot.id)
  );

  const follow = () => {
    setIsFollowing(!isFollowing);
    if (!followedRobots.includes(robot.id)) {
      followedRobots.push(robot.id);
      localStorage.setItem("followedRobots", JSON.stringify(followedRobots));
    }
  };
  return (
    <button
      className={style[`followButton-${isFollowing}`]}
      onClick={() => follow()}
    >
      {isFollowing || followedRobots.includes(robot.id)
        ? "Following"
        : "Follow"}
    </button>
  );
};
