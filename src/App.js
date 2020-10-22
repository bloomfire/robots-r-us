import React from 'react';
import data from './data';
import './App.css';
import Robot from './Robot';
import styled from 'styled-components';

// const Container = styled.div`
//   // justify-content:  flex-end;
//   justify-content:  space-evenly;
//   display: block;
//   flex-wrap: wrap;
//   flex-direction: column;
// `;

const Title = styled.h1`
  text-align: center;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      1: JSON.parse(localStorage.getItem(1)) || false,
      2: JSON.parse(localStorage.getItem(2)) || false,
      3: JSON.parse(localStorage.getItem(3)) || false,
      4: JSON.parse(localStorage.getItem(4)) || false,
      5: JSON.parse(localStorage.getItem(5)) || false,
      6: JSON.parse(localStorage.getItem(6)) || false,
      7: JSON.parse(localStorage.getItem(7)) || false,
      8: JSON.parse(localStorage.getItem(8)) || false,
      9: JSON.parse(localStorage.getItem(9)) || false,
      10: JSON.parse(localStorage.getItem(10)) || false,

      11: JSON.parse(localStorage.getItem(11)) || false,
      12: JSON.parse(localStorage.getItem(12)) || false,
      13: JSON.parse(localStorage.getItem(13)) || false,
      14: JSON.parse(localStorage.getItem(14)) || false,
      15: JSON.parse(localStorage.getItem(15)) || false,
      16: JSON.parse(localStorage.getItem(16)) || false,
      17: JSON.parse(localStorage.getItem(17)) || false,
      18: JSON.parse(localStorage.getItem(18)) || false,
      19: JSON.parse(localStorage.getItem(19)) || false,
      20: JSON.parse(localStorage.getItem(20)) || false,

      21: JSON.parse(localStorage.getItem(21)) || false,
      22: JSON.parse(localStorage.getItem(22)) || false,
      23: JSON.parse(localStorage.getItem(23)) || false,
      24: JSON.parse(localStorage.getItem(24)) || false,
      25: JSON.parse(localStorage.getItem(25)) || false,
      26: JSON.parse(localStorage.getItem(26)) || false,
      27: JSON.parse(localStorage.getItem(27)) || false,
      28: JSON.parse(localStorage.getItem(28)) || false,
      29: JSON.parse(localStorage.getItem(29)) || false,
      30: JSON.parse(localStorage.getItem(30)) || false,

      31: JSON.parse(localStorage.getItem(31)) || false,
      32: JSON.parse(localStorage.getItem(32)) || false,
      33: JSON.parse(localStorage.getItem(33)) || false,
      34: JSON.parse(localStorage.getItem(34)) || false,
      35: JSON.parse(localStorage.getItem(35)) || false,
      36: JSON.parse(localStorage.getItem(36)) || false,
      37: JSON.parse(localStorage.getItem(37)) || false,
      38: JSON.parse(localStorage.getItem(38)) || false,
      39: JSON.parse(localStorage.getItem(39)) || false,
      40: JSON.parse(localStorage.getItem(40)) || false,

      41: JSON.parse(localStorage.getItem(41)) || false,
      42: JSON.parse(localStorage.getItem(42)) || false,
      43: JSON.parse(localStorage.getItem(43)) || false,
      44: JSON.parse(localStorage.getItem(44)) || false,
      45: JSON.parse(localStorage.getItem(45)) || false,
      46: JSON.parse(localStorage.getItem(46)) || false,
      47: JSON.parse(localStorage.getItem(47)) || false,
      48: JSON.parse(localStorage.getItem(48)) || false,
      49: JSON.parse(localStorage.getItem(49)) || false,
      50: JSON.parse(localStorage.getItem(50)) || false
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
      [id]: !this.state[id] 
    },
    () => {
      localStorage.setItem(id, JSON.stringify(this.state[id]))
    })
  }

  componentDidMount() {
    this.sortRobotsByLastName(data)
  }

  render(){
    return (
      <div>
        <Title>Robots-R-Us</Title>
        <div className="App">
          {this.state.data.map(robot => <Robot robot={robot} booleanFollowing={this.state[robot.id]} toggleFollowing={this.toggleFollowing} key={robot.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;
