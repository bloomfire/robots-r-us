import React from 'react';
import data from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var followRobot = e.target.id;
    this.setState((prevState) => {
      prevState.followed[followRobot] = followRobot;
    }, () => console.log(this.state));
    document.getElementById(followRobot).innerText = "Followed";
  }

  render() {
    var { followed } = this.state;
    return (
      <div 
        className="App" 
      >
        <h1>Robots-R-Us</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "15px 15px",
          }} 
        >
          {data.map(
            (robot) => {
              return (
                <div 
                  id={robot.id}
                  key={robot.id}
                  style={{
                    height: "200px",
                    width: "200px",
                    border: "1px solid black",
                    display: "inline-block",
                    margin: "10px"
                  }}
                >
                  <img 
                    src={robot.avatar} 
                    alt="avatar here"
                  >
                  </img>
                  <br></br>
                  {robot.first_name}&nbsp;{robot.last_name}<br></br>
                  {robot.email}<br></br>
  
                  {robot.title}<br></br>
                  <button 
                    id={`${robot.first_name} ${robot.last_name}`} 
                    onClick={this.handleClick}
                  >
                    {followed[`${robot.first_name} ${robot.last_name}`] ? "Followed" : `Follow ${robot.first_name}`}
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
