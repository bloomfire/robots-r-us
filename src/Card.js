import React from 'react';

function Card({ robotData }) {
  console.log(robotData)
  var followStatus = 'unfollowed';
  return (
    <div className="card">
      <img className="avatar" src={robotData.avatar} alt={robotData.last_name}></img>
      <div className="name">{robotData.first_name} {robotData.last_name}</div>
      <div className="title">{robotData.title}</div>
      <div className="email">{robotData.email}</div>
      <div id={followStatus} className="follow">Follow</div>
    </div>
  );
};

export default Card;