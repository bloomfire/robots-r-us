import React from "react";
import data from "./data";
import "./App.css";
import ls from 'local-storage'

class App extends React.Component {
  constructor(props) {
    super(props);
    // This state variable allows me to track followed
    // via index.
    this.state = {
      follow: JSON.parse(ls.get('follow')) || [],
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Robots-R-Us</h2>
        <div className="robotContain">
          {data.map((robot, i) => {
            return (
              <div
                onClick={() => {
                  this.setState({
                    follow:
                      this.state.follow.indexOf(i) !== -1
                        ? this.state.follow.filter((f) => f !== Number(i))
                        : [...this.state.follow, i],
                  });
                  ls.set('follow', JSON.stringify(this.state.follow));
                }}
                key={i}
                className="robotGroup"
              >
                {/* ROBO AVATAR */}
                <div
                  style={{ backgroundImage: (robot.avatar ? "url(" + robot.avatar + ")" : "url('https://place-hold.it/100x100?text=NO%20ROBO')") }}
                  className="robotAvatar"
                ></div>
                {/* ROBO NAME */}
                <div className="robotName">
                  {robot.first_name + " " + robot.last_name}
                </div>
                {/* FOLLOW BUTTON */}
                <div
                  className={
                    this.state.follow.indexOf(i) !== -1
                      ? "robotFollowedButton"
                      : "robotFollowButton"
                  }
                >
                  {this.state.follow.indexOf(i) !== -1
                      ? "Followed"
                      : "Follow"}
                </div>
                {/* ROBO TITLE */}
                <span className="robotTitle">{robot.title}</span>
                {/* ROBO EMAIL */}
                <span className="robotEmail">{robot.email}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
