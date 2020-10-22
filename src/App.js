import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [follow, setFollow] = useState('Follow');
  const [robots, setRobots] = useState([]);
  useEffect(()=> {
    let sort = data.sort((a,b) =>{
      return a.last_name > b.last_name ? 1 : -1;
    });
    setRobots(sort)
}, []);


  const handleFollow = (e) => {
    e.preventDefault();
    let value = e.target.text;
    // console.log(value)
    value == follow ? value = 'Following' : value = 'Follow';
    e.target.text = value;
  }
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="container">
      {robots.map(robot => 
      <div className="wrapper">
        <div className="card" style={{width: "14rem"}}>
          <div className="img-wrapper"
          style=
          {{backgroundImage: `url( ${robot.avatar ? robot.avatar :  'https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png'}`}}
          >
          </div>
          <div className="card-body">
            <h5 className="card-title">{robot.first_name} {robot.last_name}</h5>
            <p className="card-text">{robot.title ? robot.title : '-'}</p>
            <p className="card-text">{robot.email ? robot.email : '-'}</p>
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
