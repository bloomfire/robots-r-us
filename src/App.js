import React, { useState } from 'react';
import data from './data';
import './App.css';
const defaultAvatar = 'https://purepng.com/public/uploads/medium/purepng.com-futurama-benderfuturamaanimated-sciencefictionsitcomcartoonfuturama-benderbender-1701528563136my4l2.png';

function App() {
  const [followedRobots, setFollowedRobots] = useState(new Set());

  const toggleFollow = (robot) => {
    const updatedSet = new Set(followedRobots);
    if (!updatedSet.has(robot.id)) {
      updatedSet.add(robot.id);
      setFollowedRobots(updatedSet);
    } else {
      updatedSet.delete(robot.id);
      setFollowedRobots(updatedSet);
    }
  }

  const sortRobotsByLastName = (robots) => {
    return robots.sort(function(a, b) {
      return a.last_name.toUpperCase().localeCompare(b.last_name.toUpperCase());
    });
  }

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="Robots-container">
        {sortRobotsByLastName(data).map(robot => {
          return(
            <div className="Robot-container" key={robot.id}>
              <img
                className="Robot-avatar"
                alt="avatar"
                src={robot.avatar ? robot.avatar : defaultAvatar}
              />
              <p className="Robot-name">{robot.first_name} {robot.last_name}</p>
              <button
                onClick={() => toggleFollow(robot)}
                className={!followedRobots.has(robot.id) ? "Follow-button" : "Following-button"}
                >
                {!followedRobots.has(robot.id) ? "Follow" : "Following"}
              </button>
              <p className="Robot-title">{robot.title}</p>
              <p className="Robot-email">{robot.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
