import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function FollowButton() {
  const [follow, setFollow] = useState("Follow");
  const [buttonStyle, setButtonStyle] = useState(
    "robot-follow-button-unclicked"
  );

  const handleClick = (e) => {
    e.preventDefault();
    follow === "Follow" ? setFollow("Following") : setFollow("Follow");
    buttonStyle === "robot-follow-button-unclicked"
      ? setButtonStyle("robot-follow-button-clicked")
      : setButtonStyle("robot-follow-button-unclicked");
  };

  return (
    <div>
      <Button variant="primary" className={buttonStyle} onClick={handleClick}>
        {follow}
      </Button>
    </div>
  );
}

export default FollowButton;
