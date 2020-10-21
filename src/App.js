import React, { Component } from 'react'
import './App.css';
import data from "./data";
import RobotContainer from './RobotContainer'
import FilterBar from './FilterBar' 

export default class App extends Component {
  state = {
    robots: [],
    robotsDisplay: []
  }

  componentDidMount(){
    this.setState({
      robots: data,
      robotsDisplay: data
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Robots-R-Us</h1>
          <FilterBar/>
          <RobotContainer robotsDisplay={this.state.robotsDisplay}/>
     </div>
    )
  }
}
