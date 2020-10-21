import React, { useState } from "react";

const DynamicButton = () => {
  const [follow, setFollow] = useState("Follow");
  const [buttonStyle, setStyle] = useState("follow-button");

  //onclick triggers this function, which handles changing inner text & className CSS
  const handleClick = (event) => {
    event.preventDefault();
    follow === "Follow" ? setFollow("Following") : setFollow("Follow");
    buttonStyle === "follow-button" ? setStyle("following-button") : setStyle("follow-button");
  };

  return (
    <React.Fragment>
      <button className={buttonStyle} onClick={handleClick}>
        {follow}
      </button>
    </React.Fragment>
  );
}

export default DynamicButton;