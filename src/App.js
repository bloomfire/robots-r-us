import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [follow] = useState('Follow');
  const handleFollow = (event) => {
    event.preventDefault();
    let value = event.target.text;
    value === follow ? value = 'Unfollow' : value = follow;
    event.target.text = value;
  }

  const [, Robots] = useState([]);
  useEffect(()=> {
    let sort = data.sort((a,b) =>{
      return a.last_name > b.last_name ? 1 : -1;
    });
    Robots(sort);
  }, []);

  return (
    <div className="App">
    <h1>Robots-R-Us</h1>
    <div className="robots">
        {data.map((robot, id) => (
          <div key={id}>
            <img alt="" src={robot.avatar}></img>
            <h2>{robot.first_name} {robot.last_name}</h2>
            <button>
              <a href="" onClick={handleFollow}>{follow}</a>
            </button>
            <h4>{robot.title}</h4>
            <p>{robot.email}</p>
          </div>
        ))}
    </div>
  </div>
  );
  }    


export default App;