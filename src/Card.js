import React from 'react';

function Card({ robotData, toggleFollower, followed }) {

  // set default following status & text to display for buttons
  let followStatus = 'unfollowed';
  let followText = 'Follow';

  // change status if this robot is already being followed
  if (followed.includes(robotData.id)) {
    followStatus = 'followed';
    followText = 'Unfollow';
  }

  return (
    <div className="card">

      {/* robot info */}
      <img className="avatar" src={robotData.avatar} alt={robotData.last_name}></img>
      <div className="name">{robotData.first_name} {robotData.last_name}</div>
      <div className="title">{robotData.title}</div>
      <div className="email">{robotData.email}</div>

      {/* follow button */}
      <div id={robotData.id}
           className={followStatus}
           onClick={toggleFollower}>
        {followText}
      </div>
    </div>
  );
};

export default Card;
