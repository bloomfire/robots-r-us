import React, { useState } from "react";
import "../App.css";

const FollowButton = ({ userID }) => {
  const [isFollowing, setIsFollowing] = useState({});

  const handleFollowClick = (e) => {
    e.preventDefault();
    setIsFollowing({
      ...isFollowing,
      [e.target.id]: !isFollowing[e.target.id],
    });
  };
  return (
    <div>
      <button
        id={userID}
        className={
          isFollowing[userID] ? "followButton following" : "followButton"
        }
        onClick={handleFollowClick}
      >
        {isFollowing[userID] ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;
