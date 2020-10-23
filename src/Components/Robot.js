import React from "react";
import { Card, Avatar, Name, Title, Follow } from "../CoreStyles";

export default function Robot({ robot }) {
  return (
    <Card>
      <div>
        <Avatar src={robot.avatar} />
      </div>
      <Name>
        {robot.first_name} {robot.last_name}
      </Name>
      <Follow>Follow</Follow>
      <Title>{robot.title}</Title>
      <div>{robot.email}</div>
    </Card>
  );
}
