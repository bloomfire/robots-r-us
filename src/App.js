import React from 'react';
import data from './data';
import RobotCards from "./components/RobotCards/RobotCards";
import Title from "./components/Title/Title"
import './App.css';

function App() { 

  return (
    <div className="wrapper">
      <Title />
     
    {data.map(robodata => 
      <RobotCards
        avatar={robodata.avatar}
        lastname={robodata.last_name}
        firstname={robodata.first_name}
        email={robodata.email}
        title={robodata.title}
        />
  )}
  </div>
  )
}

export default App;
