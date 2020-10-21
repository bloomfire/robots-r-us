import React from 'react';
import data from './data.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''

    }

  }

  handleChanges(events){
    this.setState({value :Event.Target.value})
  }
  render(){
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <ul>
    {data.map((robot,index) =>(
      <li key={index}>
        {robot.first_name + ' ' + robot.last_name + ' Title: ' + robot.title + ', Email:' + robot.email} 
        <button className='FollowButton'>Follow</button>
      </li>
    ))}
      </ul>

    </div>
  );
}
}

export default App;
