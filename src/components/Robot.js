import React from "react";
import FollowButton from "./FollowButton";

const Robot = ({ bot }) => {
  return (
    <div className="robotCard">
      <div className="cardContents">
        <img src={bot.avatar} alt="Robot Face" />
        <h2>
          {bot.first_name} {bot.last_name}
        </h2>
        <FollowButton />
        <h3>{bot.title}</h3>
        <h4>{bot.email}</h4>
      </div>
    </div>
  );
};

export default Robot;
