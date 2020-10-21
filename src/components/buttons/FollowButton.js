import React, { useState } from "react";
import style from "./style.module.scss";

export default () => {
  const [isFollowing, setIsFollowing] = useState();
  return (
    <button
      className={style.followButton}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};
