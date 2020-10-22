import React from "react";
import data from "./data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: [],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Robots-R-Us</h1>
        <div className="robotContain">
          {data.map((robot, i) => {
            return (
              // Flex
              <div onClick={() => {}} key={i} className="robotGroup">
                <div
                  style={{ backgroundImage: "url(" + robot.avatar + ")" }}
                  className="robotAvatar"
                ></div>
                <div className="robotName">{robot.first_name + " " + robot.last_name}</div>
                <div className="robotFollowButton">Follow</div>
            <span className="robotTitle">{robot.title}</span>
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
