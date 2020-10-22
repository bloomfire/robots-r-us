import React from "react";

const Avatar = ({ avatarUrl, avatarAlt }) => (
  <div>
    <img src={avatarUrl} alt={avatarAlt} />
  </div>
);

export default Avatar;
