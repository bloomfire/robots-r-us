import React from "react";
import style from "./style.module.scss";
import FollowButton from "../../components/buttons/FollowButton";

export default ({ robot }) => {
  const { first_name, last_name, avatar, title, email } = robot;

  const renderAvatar = avatar => {
    if (avatar) {
      return <img className={style.robotAvatar} src={avatar} alt="profile" />;
    } else {
      return (
        <img
          className={style.robotAvatar}
          src={require("./defaultImage.jpg")}
          alt="profile"
        />
      );
    }
  };

  return (
    <div className={style.robotCard}>
      {renderAvatar(avatar)}
      <h1 className={style.robotName}>{first_name + " " + last_name}</h1>
      <FollowButton />
      <h2 className={style.robotTitle}>{title}</h2>
      <h3 className={style.robotEmail}>{email}</h3>
    </div>
  );
};
