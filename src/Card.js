import React from 'react';

function Card({ robotData }) {
  console.log(robotData)
  return (
    <div className="card">
      <img className="avatar" src={robotData.avatar} alt={robotData.last_name}></img>
      <div className="name">{robotData.first_name} {robotData.last_name}</div>
      <div>{robotData.title}</div>
      <div>{robotData.email}</div>
    </div>
  );
};

export default Card;