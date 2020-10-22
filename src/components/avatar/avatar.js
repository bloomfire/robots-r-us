import React from "react";

const defaultAvatar = "https://robohash.org/autautet.bmp?size=100x100&set=set2";

const Avatar = ({ avatarUrl, avatarAlt }) => (
  <div>
    <img src={avatarUrl ? avatarUrl : defaultAvatar} alt={avatarAlt} />
  </div>
);

export default Avatar;
