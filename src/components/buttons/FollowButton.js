import React, { useState } from "react";
import style from "./style.module.scss";

export default ({ robot }) => {
  const { id } = robot;
  let followedRobots = JSON.parse(localStorage.getItem("followedRobots"));
  const [isFollowing, setIsFollowing] = useState(followedRobots.includes(id));

  const follow = () => {
    setIsFollowing(!isFollowing);
    if (!followedRobots.includes(id)) {
      followedRobots.push(id);
      localStorage.setItem("followedRobots", JSON.stringify(followedRobots));
    } else {
      const index = followedRobots.indexOf(id);
      if (index > -1) {
        followedRobots.splice(index, 1);
        localStorage.setItem("followedRobots", JSON.stringify(followedRobots));
      }
    }
  };
  return (
    <button
      className={style[`followButton-${isFollowing}`]}
      onClick={() => follow()}
    >
      {followedRobots.includes(id) ? "Following" : "Follow"}
    </button>
  );
};
