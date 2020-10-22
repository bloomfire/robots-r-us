import React from "react";
import Avatar from "../avatar";

const RobotCard = ({ firstName, lastName, email, title, avatar }) => {
  return (
    <div>
      <Avatar avatarUrl={avatar} avatarAlt={`${firstName} ${lastName}'s Avatar`} />
      <h2>
        {firstName} {lastName}
      </h2>
      <button>Follow</button>
      <h3>{title}</h3>
      <p>{email}</p>
    </div>
  );
};

export default RobotCard;
