import React, { useState } from "react";

const FollowButton = () => {
  const [click, setClick] = useState(false);
  const [buttonText, setButtonText] = useState("Follow");

  const handleFollowButtonClick = (e) => {
    e.preventDefault();
    setClick(true);
    setButtonText("Following");
  };

  return <button onClick={handleFollowButtonClick}>{buttonText}</button>;
};

export default FollowButton;
