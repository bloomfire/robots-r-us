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
  // width: 50px;
  // height: 50px;
`;


function Robot(props) { 
    console.log(props.robot)
    
    return (
      <RobotProfile className="robot">
        <RobotPhoto src={props.robot.avatar}/>
        <h3>{props.robot.first_name} {props.robot.last_name}</h3>
        <h4>Follow</h4>
        <h4>{props.robot.title}</h4>
        <h4>{props.robot.email}</h4>
      </RobotProfile>

    );
}

export default Robot;
