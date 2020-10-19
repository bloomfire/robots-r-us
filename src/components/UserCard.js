import React from "react";
import FollowButton from "./FollowButton";

const UserCard = ({ user }) => {
  return (
    <div>
      <div>
        <img className="Avatar" src={user.avatar}></img>
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
