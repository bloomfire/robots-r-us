import React from 'react';
import './index.css';
import RobotCards from './components/robotsCards';
//styles
import { RobotAppWrapper } from './styles/index';

function App() {
  return (
    <div className="App">
      <RobotAppWrapper>
        <h1>Robots-R-Us</h1>
        <RobotCards />
      </RobotAppWrapper>
    </div>
  );
}

export default App;
