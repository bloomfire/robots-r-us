import React from 'react';
import data from './data';
import Card from './Card.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      followed: []
    };

    // bind context for App methods
    this.toggleFollower = this.toggleFollower.bind(this);

  }

  toggleFollower = (e) => {
    // create copy of followers array from state
    let robotsFollowed = this.state.followed;

    // check if id of element w/ click event is included in followed robots array
    // if not, add the id
    if (!robotsFollowed.includes(parseInt(e.target.id))) {
      robotsFollowed.push(parseInt(e.target.id));
    } else {
      // if id already exists, remove it
      let indexToRemove = robotsFollowed.indexOf(parseInt(e.target.id));
      robotsFollowed.splice(indexToRemove, 1)
    }

    // set state with new array of followed robots
    this.setState({
      followed: robotsFollowed
    });

  }

  render() {
    return (
      <div className="App">

        {/* title */}
        <h1>Robots-R-Us</h1>

          {/* render each robot's info to its own robot card using map func */}
        <div className="card-container">
          {data.map((robot) => {
            return <Card robotData={robot}
                         key={robot.id}
                         toggleFollower={this.toggleFollower}
                         followed={this.state.followed} />;
          })}
        </div>

      </div>
    );
  }
};

// function App() {
//   return (
//     <div className="App">

//       {/* title */}
//       <h1>Robots-R-Us</h1>

//         {/* render each robot's info to its own robot card using map func */}
//       <div className="card-container">
//         {data.map((robot) => {
//           return <Card robotData={robot} key={robot.id} />;
//         })}
//       </div>

//     </div>
//   );
// };

export default App;
