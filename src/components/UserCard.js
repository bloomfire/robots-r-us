import React from "react";
import FollowButton from "./FollowButton";

const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <div>
        <img className="avatar" src={user.avatar}></img>
      </div>
      <div>
        {`${user.first_name} ${user.last_name}`} <br></br>
        <FollowButton userID={user.id} /> <br></br>
        {user.title} <br></br>
        {user.email}
      </div>
    </div>
  );
};
export default UserCard;
