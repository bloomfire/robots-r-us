import React from 'react';

function Card({ robotData, toggleFollower, followed }) {

  let followStatus = 'unfollowed';
  let followText = 'Follow';

  if (followed.includes(robotData.id)) {
    followStatus = 'followed';
    followText = 'Unfollow';
  }

  console.log(followed)

  return (
    <div className="card">
      <img className="avatar" src={robotData.avatar} alt={robotData.last_name}></img>
      <div className="name">{robotData.first_name} {robotData.last_name}</div>
      <div className="title">{robotData.title}</div>
      <div className="email">{robotData.email}</div>
      <div id={followStatus}
           className="follow"
           onClick={toggleFollower}>
        {followText}
      </div>
    </div>
  );
};

export default Card;
