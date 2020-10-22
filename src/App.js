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
    });
    document.getElementById(followRobot).innerText = "Following";
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
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
                    margin: "10px",
                    backgroundColor: "#ffffff",
                    borderRadius: "5px",
                  }}
                >
                  <img 
                    src={
                      robot.avatar ? 
                      robot.avatar : 
                      ''
                    }
                    style={
                      robot.avatar ? 
                      {} :
                      {display: "none"}
                    }
                  >
                  </img>
                  <br></br>
                  
                  
                  {robot.first_name}&nbsp;{robot.last_name}<br></br>
                  <button 
                    id={`${robot.first_name} ${robot.last_name}`} 
                    onClick={this.handleClick}
                  >
                    {followed[`${robot.first_name} ${robot.last_name}`] ? 'Followed' : 'Follow'}
                  </button><br></br>
  
                  {robot.title}<br></br>

                  {robot.email}<br></br>

                  
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
