import React from 'react';
import data from './data';
import './App.css';
import Robot from './Robot';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      1: true,
      2: false,
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
      17: [],
      18: [],
      19: [],
      20: [],
      21: [],
      22: [],
      23: [],
      24: [],
      25: [],
      26: [],
      27: [],
      28: [],
      29: [],
      30: [],
      31: [],
      32: [],
      33: [],
      34: [],
      35: [],
      36: [],
      37: [],
      38: [],
      39: [],
      40: [],
      41: [],
      42: [],
      43: [],
      44: [],
      45: [],
      46: [],
      47: [],
      48: false,
      49: true,
      50: []
    };
    this.sortRobotsByLastName = this.sortRobotsByLastName.bind(this);
    this.toggleFollowing = this.toggleFollowing.bind(this);

  }

  sortRobotsByLastName(robotData){
    let sortedRobotData = robotData.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
    this.setState({
      data: sortedRobotData
    })
  }

  toggleFollowing(id){  
    this.setState({
      // following: !this.state.following
      // [props.robot.id]: 'hello world' //!this.state[props.robot.id]
      [id]: !this.state[id] //!this.state[props.robot.id]

    })
    // () => {
    //   // localStorage.setItem('following', JSON.stringify(this.state.following))
    //   localStorage.setItem(id, JSON.stringify(this.state[3]))
    // });
    console.log('clicked', id)
  }





  // handleFollowRobotClick() {
  //   this.setState(state => ({
  //     following: !state.following
  //   }));
  // }

  componentDidMount() {
    // this.sortRobotsByLastName(data)
    console.log('mounted')
  }

  render(){
    return (
      <div className="App">
        <h1>Robots-R-Us</h1>
        {this.state.data.map(robot => <Robot robot={robot} booleanFollowing={this.state[robot.id]} toggleFollowing={this.toggleFollowing} key={robot.id}/>)}
      </div>
    );
  }
}

export default App;
