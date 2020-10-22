import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

  // add employee card components to robotcards to dynamically populate employee cards
  const makeEmployeeCards = (robots) => {
    const cards = []
      robots.forEach(robot => {
        cards.push(
          <EmployeeCard
            key={robot.id}
            className="employee-card"
            id={robot.id}
            name={`${robot.first_name} ${robot.last_name}`}
            title={robot.title}
            email={robot.email}
            avatar={robot.avatar || 'https://robohash.org/DEFAULT?size=100x100&set=set1'}
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
      let sortedData = data.sort((a, b) => {
        if (a.last_name < b.last_name) return -1;
        if (a.last_name > b.last_name) return 1;
        return 0;
      });
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
      <div className="container">
        { robotCards || null }
      </div>
    </div>
  );
}

export default App;
