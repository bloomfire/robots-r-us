import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';

function App() {
  // sets follow state to 'Follow'
  const [follow, setFollow] = useState('Follow');

  // sets robots state
  const [robots, setRobots] = useState([]);

  // sorts by last name and changes the robots state once, when the app is mounted
  useEffect(()=> {
    let sort = data.sort((a,b) =>{
      return a.last_name > b.last_name ? 1 : -1;
    });
    setRobots(sort)
  }, []);

  // if follow value is set to the follow state, then change it to 'following', otherwise,
  // change it to the follow state
  const handleFollow = (e) => {
    e.preventDefault();
    let value = e.target.text;
    // console.log(value)
    value == follow ? value = 'Following' : value = follow;
    e.target.text = value;
  }

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="container">
        {/* map through the robots and display their values */}
        {robots.map(robot => 
        <div className="wrapper">
          <div className="card" style={{width: "14rem"}}>
            <div className="img-wrapper"
            style=
            // if an avatar is available, display it, if not, display blank avatar pic
            {{backgroundImage: `url( ${robot.avatar ? robot.avatar :  'https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png'}`}}
            >
            </div>
            <div className="card-body">
              <h5 className="card-title">{robot.first_name} {robot.last_name}</h5>
              {/* same concept as avatar pic display */}
              <p className="card-text">{robot.title ? robot.title : '-'}</p>
              <p className="card-text">{robot.email ? robot.email : '-'}</p>
              {/* bind to handleFollow method */}
              <a href="#" className="btn btn-primary" onClick={handleFollow}>{follow}</a>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
