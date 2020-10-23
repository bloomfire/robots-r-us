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
      <img className="profile-info" src={robot.avatar} alt="robot avatar"/>
      <div className="profile-info robot-name">
        <b>
          {`${robot.first_name} ${robot.last_name}`}
        </b>
      </div>
      <button className="profile-info" style={following ? {background: "green", color: "white"} : null} onClick={e => handleFollow(e)}>{following ? "Unfollow" : "Follow"}</button>
      <div className="profile-info">
        {robot.title}
      </div>
      <div className="profile-info">
        {robot.email}
      </div>
    </div>
  )
};

export default Employee;