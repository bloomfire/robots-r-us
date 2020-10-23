import React from "react";
import {
  RobotCard,
  Avatar,
  Name,
  Button,
  Content,
  ContentArea,
} from "./styledcomponents";
function Robotcard({ first_name, last_name, email, title, avatar }) {
  return (
    <RobotCard>
      <Avatar src="https://robohash.org/autautet.bmp?size=100x100&set=set1" />
      <ContentArea>
        <Name>{first_name + " " + last_name}</Name>
        <Button>follow</Button>
        <Content>{title}</Content>
        <Content>{email}</Content>
      </ContentArea>
    </RobotCard>
  );
}

export default Robotcard;
