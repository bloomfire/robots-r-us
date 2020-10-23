import React, { useState } from "react";
import { Card, Avatar, Name, Title, Follow } from "../CoreStyles";
import Bender from "../images/bender.png";

export default function Robot({ robot }) {
  const [buttonState, setButtonState] = useState(false);

  const toggleButtonState = () => {
    setButtonState(!buttonState);
  };
  return (
    <Card>
      <div>
        {robot.avatar ? <Avatar src={robot.avatar} /> : <Avatar src={Bender} />}
      </div>
      <Name>
        {robot.first_name} {robot.last_name}
      </Name>
      <Follow buttonState={buttonState} onClick={() => toggleButtonState()}>
        Follow
      </Follow>
      <Title>{robot.title}</Title>
      <div>{robot.email}</div>
    </Card>
  );
}
