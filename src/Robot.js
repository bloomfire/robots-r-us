import React from 'react';
import styled from 'styled-components';

const RobotProfile = styled.div`
  border-radius: 25px;
  border: 1px solid red;
  margin: 20px;
  padding: 15px;
  width: 275px;
  height: 275px;
  color: black;
  background-color: #72C4B6;
  float:left
`;

const RobotPhoto = styled.img`
  border-radius: 100%;
  border: 1Spx solid black;
  // margin: 20px;
  // padding: 15px;
  width: 100px;
  height: 100px;
`;

const defaultAvatarFry = 'https://pbs.twimg.com/profile_images/3555009298/146c8cd1fca9ab61b0b1b86fad1d627f.jpeg';

class Robot extends React.Component {
  constructor() {
    super();
    this.state = {
      followed: false
    };
  }

  render(){
    return (
      <RobotProfile className="robot">
        <RobotPhoto src={this.props.robot.avatar ? this.props.robot.avatar : defaultAvatarFry}/>
        <h3>{this.props.robot.first_name} {this.props.robot.last_name}</h3>
        <h4>{this.props.robot.title}</h4>
        <h4>{this.props.robot.email}</h4>
      </RobotProfile>
    );
  }
}

export default Robot;
