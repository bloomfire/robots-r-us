import React, {useState} from 'react';
import "./Employee.css";

const Employee = ({robot}) => {
  const [following, setFollowing] = useState(false);

  const handleFollow = (e) => {
    e.preventDefault();
    setFollowing(!following);
  };

  return (
    <div className="avatar-profile">
      <img src={robot.avatar} alt="robot avatar"/>
      <div>
        {`${robot.first_name} ${robot.last_name}`}
      </div>
      <button onClick={e => handleFollow(e)}>{following ? "Unfollow" : "Follow"}</button>
      <div>
        {robot.title}
      </div>
      <div>
        {robot.email}
      </div>
    </div>
  )
};

export default Employee;