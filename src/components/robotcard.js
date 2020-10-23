import React from "react";
import {
  RobotCard,
  Avatar,
  Name,
  Button,
  Content,
  ContentArea,
} from "./styledcomponents";
function Robotcard({
  first_name,
  last_name,
  email,
  title,
  avatar,
  follow,
  clickHandler,
  id,
}) {
  function handleClick(id, lastName) {
    const newobject = {
      [id]: lastName,
    };
    clickHandler(newobject);
  }
  return (
    <RobotCard>
      <Avatar src={avatar ? avatar : "https://robohash.org/unknown?set=set4"} />
      <ContentArea>
        <Name>{first_name + " " + last_name}</Name>
        <Button follow={follow} onClick={() => handleClick(id, last_name)}>
          {follow ? "Following" : "Follow"}
        </Button>
        {title && <Content>{title}</Content>}
        {email && <Content>{email}</Content>}
      </ContentArea>
    </RobotCard>
  );
}

export default Robotcard;
