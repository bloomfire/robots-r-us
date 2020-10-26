import React from "react";
// style
import "./Card.css";
// img
import defaultRobot from "../img/404-robot.png";

const Card = ({ profile, followed, toggleFollow }) => {
  const { id, first_name, last_name, email, title, avatar } = profile;

  return (
    <div className="card">
      <img
        className="avatar"
        src={avatar ? avatar : defaultRobot}
        alt={`${first_name} ${last_name}`}
      />
      <h2>{`${first_name} ${last_name}`}</h2>
      <button
        className={`follow-button ${followed && "following"}`}
        onClick={() => toggleFollow(id)}
      >
        {followed ? "Following" : "Follow"}
      </button>
      <h3>{title}</h3>
      <p className="email">{email}</p>
    </div>
  );
};

export default Card;
