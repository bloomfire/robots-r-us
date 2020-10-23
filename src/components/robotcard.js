import React from "react";
import { RobotCard, Avatar, Name, Button, Content } from "./styledcomponents";
function Robotcard() {
  return (
    <RobotCard>
      <Avatar src="https://robohash.org/autautet.bmp?size=100x100&set=set1" />
      <Name>name</Name>
      <Button>follow</Button>
      <Content>Title</Content>
      <Content>email</Content>
    </RobotCard>
  );
}

export default Robotcard;
