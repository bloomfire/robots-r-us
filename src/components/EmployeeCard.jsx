import React from 'react';


// "id": 1,
// "first_name": "Red",
// "last_name": "Pudner",
// "email": "rpudner0@shareasale.com",
// "title": "Pharmacist",
// "avatar": "https://robohash.org/autautet.bmp?size=100x100&set=set1"

const EmployeeCard = ({ id, name, title, email, avatar  }) => {
  //avatar
  //name
  //button 
  //title
  //email
  return (
    <div>
      {/* <img src={nothingyet} /> */}
      <h3>{ name }</h3>
      {/* <Button /> */}
      <h3>{ title }</h3>
      <h3>{ email }</h3>
    </div>
  );

};

export default EmployeeCard;