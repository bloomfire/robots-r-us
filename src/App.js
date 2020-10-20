import React from 'react';
import data from './data';
import './App.css';
import Robot from './Robot';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: data
    };
    this.sortRobotsByLastName = this.sortRobotsByLastName.bind(this);
  }

  sortRobotsByLastName(robotData){
    let sortedRobotData = robotData.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    this.setState({
      data: sortedRobotData
    })
  }

  componentDidMount() {
    this.sortRobotsByLastName(data)
  }

  render(){
    return (
      <div className="App">
        <h1>Robots-R-Us</h1>
  
  
        {this.state.data.map(robot => <Robot robot={robot} key={robot.id}/>)}
  
  
      </div>
    );
  }
}

export default App;
