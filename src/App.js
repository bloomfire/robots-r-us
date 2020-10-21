import React from 'react';
import data from './data';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RobotProfileCard from './components/RobotProfileCard.js';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Robots-R-Us</h1>
        <Row>
          {data.map(robot =>
          <Col className="profile" sm={6} lg={3}>
            <RobotProfileCard
            id={robot.id}
            name={robot.first_name+" "+robot.last_name}
            email={robot.email}
            title={robot.title}
            avatar={robot.avatar}
            />
          </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
