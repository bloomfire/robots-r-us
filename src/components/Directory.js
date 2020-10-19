import React from "react";
import UserCard from "./UserCard";

const Directory = ({ data }) => {
  return (
    <div>
      Directory
      {data.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Directory;
