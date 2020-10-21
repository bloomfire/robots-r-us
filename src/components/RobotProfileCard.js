import React, { Component } from 'react';

export default class RobotProfileCard extends Component {
  render() {
    return (
        <div>
        <img src={this.props.avatar} alt={this.props.name}/>

        <h3>{this.props.name}</h3>
        </div>
    )
  }
}
