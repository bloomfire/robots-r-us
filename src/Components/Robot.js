import React from "react";

export default function Robot({ robot }) {
  return (
    <div>
      <div>
        <img src={robot.avatar} />
      </div>
      <div>
        {robot.first_name} {robot.last_name}
      </div>
      <button>Follow</button>
      <div>{robot.title}</div>
      <div>{robot.email}</div>
    </div>
  );
}
