import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class RobotProfileCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      following: false,
      followMessage: "Follow"
    };
  }

  onClickFollowing = () => {
    console.log(this.state.following)
    if (this.state.following) {
      this.setState({
        following: !this.state.following,
        followMessage: "Follow"
      })
    } else {
      this.setState({
        following: !this.state.following,
        followMessage: "Following"
      })
    }
  }

  render() {
    return (
        <div className="box card">
          <img src={this.props.avatar} alt={this.props.name}/>
          <h3>{this.props.name}</h3>
          <Button variant={this.state.following ? "success":"outline-secondary"} onClick={this.onClickFollowing}>{this.state.followMessage}</Button>
          <h3>{this.props.title}</h3>
          <h3>{this.props.email}</h3>
        </div>
    )
  }
}
