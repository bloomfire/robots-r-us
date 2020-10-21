import React from 'react';
import Button from './Button';

// "id": 1,
// "first_name": "Red",
// "last_name": "Pudner",
// "email": "rpudner0@shareasale.com",
// "title": "Pharmacist",
// "avatar": "https://robohash.org/autautet.bmp?size=100x100&set=set1"

const EmployeeCard = ({ id, name, title, email, avatar, className  }) => {
  //avatar
  //name
  //button 
  //title
  //email
  return (
    <div className={className}>
      <img alt="robot-avatar" src={avatar} />
      <h3>{ name }</h3>
      <Button id={id} />
      <h3>{ title }</h3>
      <h3>{ email }</h3>
    </div>
  );

};

export default EmployeeCard;