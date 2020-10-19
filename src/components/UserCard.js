import React from "react";
import FollowButton from "./FollowButton";

const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <div>
        <img
          className="avatar"
          src={
            user.avatar
              ? user.avatar
              : "https://png2.cleanpng.com/sh/9fe542e39c6ea12bbc51a2c408ca9671/L0KzQYm3VcA6N6h1iZH0aYP2gLBuTfJmdpVqip91ZXXvcX73iPltcaEygp9vcomwc7F0kQV1baMygdV4boOwRbLtUvE2PWM1T6Y6NkKxSYS5U8E6O2g2TaQAOEW0RIi7UMI6P191htk=/kisspng-bender-leela-philip-j-fry-computer-icons-5af2a552074162.9323193715258514740297.png"
          }
        ></img>
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
