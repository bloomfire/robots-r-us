import React, { useState } from "react";
import style from "./style.module.scss";

export default () => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <button
      className={style[`followButton-${isFollowing}`]}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};
