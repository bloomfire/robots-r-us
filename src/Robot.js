import React from 'react';
import styled from 'styled-components';

const RobotProfile = styled.div`
  border-radius: 25px;
  border: 1px solid black;
  margin: 10px;
  padding: 15px;
  width: 300px;
  height: 300px;
  color: black;
  background-color: #72C4B6;
  float:left
`;

const RobotPhoto = styled.img`
  border-radius: 100%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

const UnfollowButton = styled.button`
  background: green;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const FollowButton = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;



const defaultAvatarFry = 'https://pbs.twimg.com/profile_images/3555009298/146c8cd1fca9ab61b0b1b86fad1d627f.jpeg';
const defaultEmptyRobotInfo = '?';

class Robot extends React.Component {
  constructor() {
    super();
    this.state = {
      following: false
    };
    this.handleFollowRobotClick = this.handleFollowRobotClick.bind(this);
  }

  handleFollowRobotClick() {
    this.setState(state => ({
      following: !state.following
    }));
  }

  render(){
    let isFollowingRobot = this.state.following;
    let followingBooleanButton;
    if (isFollowingRobot) {
      followingBooleanButton = <UnfollowButton onClick={this.handleFollowRobotClick}>Unfollow</UnfollowButton>
    } else {
      followingBooleanButton = <FollowButton onClick={this.handleFollowRobotClick}>Follow</FollowButton>
    }

    return (
      <RobotProfile className="robot">
        <RobotPhoto src={this.props.robot.avatar ? this.props.robot.avatar : defaultAvatarFry}/>
        <h3>{this.props.robot.first_name} {this.props.robot.last_name}</h3>
        <h4>{this.props.robot.title ? this.props.robot.title : defaultEmptyRobotInfo}</h4>
        <h4>{this.props.robot.email ? this.props.robot.email : defaultEmptyRobotInfo}</h4>
        {followingBooleanButton}
      </RobotProfile>
    );
  }
}

export default Robot;
