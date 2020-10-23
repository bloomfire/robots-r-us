import React from "react";
import {
  RobotCard,
  Avatar,
  Name,
  Button,
  Content,
  ContentArea,
} from "./styledcomponents";
function Robotcard({ first_name, last_name, email, title, avatar, follow }) {
  return (
    <RobotCard>
      <Avatar src={avatar ? avatar : "https://robohash.org/unknown?set=set4"} />
      <ContentArea>
        <Name>{first_name + " " + last_name}</Name>
        <Button follow={follow}>{follow ? "Following" : "Follow"}</Button>
        {title && <Content>{title}</Content>}
        {email && <Content>{email}</Content>}
      </ContentArea>
    </RobotCard>
  );
}

export default Robotcard;
