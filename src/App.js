import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

  // add employee card components to robotcards to dynamically populate employee cards
  const makeEmployeeCards = (robots) => {
    console.log('in make employees')
    const cards = []
      robots.forEach(robot => {
        console.log('robot ', robot)
        cards.push(
          <EmployeeCard
            id={robot.id}
            name={`${robot.first_name} ${robot.last_name}`}
            title={robot.title}
            email={robot.email}
            avatar={robot.avatar}
          />
        )
      });
      return cards;
  };

function App() {

  const [robots, setRobots] = useState(null);
  const [robotCards, setRobotCards] = useState(null);

  // Get robots list from data on component mount
  useEffect(() => {
      // sort by last name before adding
      let sortedData = data.sort((a, b) => a.last_name - b.last_name);
      setRobots(sortedData);
  }, []);

  // update robotCards after getting raw data from data
  useEffect(() => {
    if (robots && !robotCards) {
      setRobotCards(makeEmployeeCards(robots));
    }
  }, [robots, robotCards])



  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div>
        { robotCards || null }
      </div>
    </div>
  );
}

export default App;
