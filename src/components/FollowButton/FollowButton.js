import React, { useState } from "react";
import "./FollowButton.css";

function FollowButton() {

const [followState, setFollowState] = useState(false);

return (
    <div>
        <button className="followbtn" onClick={() => setFollowState(!followState)}>{`${followState ? "following" : "follow"}`}</button>
      </div>
    )
}

export default FollowButton;