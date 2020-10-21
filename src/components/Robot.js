import React from "react";

const Robot = ({ bot }) => {
  return (
    <div className="robotCard">
      <div className="cardContents">
        <img src={bot.avatar} />
        <h2>
          {bot.first_name} {bot.last_name}
        </h2>
        <button></button>
        <h3>{bot.title}</h3>
        <h4>{bot.email}</h4>
      </div>
    </div>
  );
};

export default Robot;
