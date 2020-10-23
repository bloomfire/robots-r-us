import React from "react";
import { RobotCard, Avatar, Name, Button, Content } from "./styledcomponents";
function Robotcard({ first_name, last_name, email, title, avatar }) {
  console.log("robot data: ", first_name);
  return (
    <RobotCard>
      <Avatar src="https://robohash.org/autautet.bmp?size=100x100&set=set1" />
      <Name>{first_name}</Name>
      <Button>{last_name}</Button>
      <Content>{title}</Content>
      <Content>{email}</Content>
    </RobotCard>
  );
}

export default Robotcard;
