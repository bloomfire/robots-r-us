import React from 'react';
import styled from 'styled-components';

const RobotProfile = styled.div`
  border-radius: 25px;
  border: 2px solid red;

  margin: 20px;
  padding: 15px;
  width: 250px;
  height: 250px;
  color: black;
  background-color: #72C4B6;
  float:left
`;

const RobotPhoto = styled.img`
  border-radius: 100%;
  border: 2px solid black;
  // margin: 20px;
  // padding: 15px;
  width: 100px;
  height: 100px;
`;

const MrSparkle = 'https://pbs.twimg.com/profile_images/3555009298/146c8cd1fca9ab61b0b1b86fad1d627f.jpeg';

function Robot(props) { 
    console.log(props.robot)
    
    return (
      <RobotProfile className="robot">
        <RobotPhoto src={props.robot.avatar ? props.robot.avatar : MrSparkle}/>
        <h3>{props.robot.first_name} {props.robot.last_name}</h3>
        {/* <button onClick={activateLasers}>
          Activate Lasers
        </button> */}
        <h4>{props.robot.title}</h4>
        <h4>{props.robot.email}</h4>
      </RobotProfile>

    );
}

export default Robot;
