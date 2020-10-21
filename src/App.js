import React, { Component } from 'react'
import './App.css';
import data from "./data";
import RobotContainer from './RobotContainer'
import FilterBar from './FilterBar' 

export default class App extends Component {
  //didn't need robots & displayRobots for this challenge, but other circumstances warrant 
  //a reference to original data-set without needing to fetch constantly in case state changes
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

  handleSort = (event) => {
    //console.log(event)
    if(event.target.value === 'ID'){
      let updatedDisplayRobots = this.state.robotsDisplay.sort(function(a, b){
        if(a.id < b.id) { return -1; }
        if(a.id > b.id) { return 1; }
        return 0;
      })
      //console.log(updatedDisplayRobots)
      this.setState({
        robotsDisplay: updatedDisplayRobots
      })
    }
    else {
    if(event.target.value === 'Alphabetically'){
      let updatedDisplayRobots = this.state.robotsDisplay.sort(function(a, b){
        if(a.last_name < b.last_name) { return -1; }
        if(a.last_name > b.last_name) { return 1; }
        return 0;
      })
      //console.log(updatedDisplayRobots)
      this.setState({
        robotsDisplay: updatedDisplayRobots
      })}
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Robots-R-Us</h1>
          <FilterBar handleSort={this.handleSort}/>
          <RobotContainer robotsDisplay={this.state.robotsDisplay}/>
     </div>
    )
  }
}
