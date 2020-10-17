import React from 'react';
import data from './data';
import './App.css';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Follow' : 'Unfollow'}
      </button>
    );
  }
}
export default function App() {
  const allMapped = data.map((robot) => {
    
  return (
    <div className="card">
      <img className="avatar" src={robot.avatar}/>
      {/* <div className="id">{robot.id}</div> */}
      <div className="name">{robot.first_name} {robot.last_name}</div>
      <Follow/>
      <div className="title">{robot.title}</div>
      <div className="email">{robot.email}</div>
    </div>
 );
});
  return (
    <div className="App">
      <h1 className="header">Robots-R-Us</h1>
     
      <div className="grid-container">{allMapped}</div>
  
    </div>
    
  );
}

