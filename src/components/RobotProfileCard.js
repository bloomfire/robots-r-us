import React, { Component } from 'react';

export default class RobotProfileCard extends Component {
  render() {
    return (
        <div className="profile">
          <img src={this.props.avatar} alt={this.props.name}/>
          <h3>{this.props.name}</h3>
          <h3>{this.props.title}</h3>
          <h3>{this.props.email}</h3>
        </div>
    )
  }
}
