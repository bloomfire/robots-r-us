import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function FollowButton() {
  const [follow, setFollow] = useState("Follow");

  const handleClick = (e) => {
    e.preventDefault();
    follow === "Follow" ? setFollow("Following") : setFollow("Follow");
  };

  return (
    <div>
      <Button
        type="button"
        variant="primary"
        className="robot-follow-button"
        onClick={handleClick}
      >
        {follow}
      </Button>
    </div>
  );
}

export default FollowButton;
