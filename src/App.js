import React from 'react';
import data from './data';
import Cards from './Cards';
import { Card, Avatar, Button, Col, Row  } from 'antd';
import './App.css';
//https://iupac.org/wp-content/uploads/2018/05/default-avatar.png
function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Row justify="center">
      {data.map(robot =>
        <Cards
          name= {`${robot.first_name} ${robot.last_name}`}
          title= {robot.title}
          email= {robot.email}
          avatar= {robot.avatar}
        />
     )}
     </Row>
    </div>
  );
}

export default App;
