import React, {useState, useEffect} from 'react';
import SingleRobotComponent from './components/SingleRobotComponent';
import {updateRobotData} from './helperFunctions/helperFunctions';
import data from './data';


function App() {
   const [robotData, setRobotData] = useState(data);

   useEffect(() => {
      // check if we have robots data in localStorage, if we have data then update state
      const getRobotData = JSON.parse(localStorage.getItem('robots'));
      if(getRobotData) {
         setRobotData(getRobotData);
      } else {
         // otherwise we will run this function which adds a new property to the data and sorts the data by last name.
         //  updateRobotData will only run once, 
         setRobotData(updateRobotData(robotData));
      }
   },[]);

   useEffect(() => {
      // we want to update localStorage everytime robotData changes.
      localStorage.setItem('robots', JSON.stringify(robotData));
   },[robotData]);


   const followRobot = robot => {
      // when clicking on the follow button we need to change following property to the opposite is either true or false.
      const updateDataWhenFollow = robotData.map(robots => {
         if(robot.id === robots.id) {
            return {
               ...robots,
               following: !robots.following
            }
         }
         return robots;
      })
      setRobotData(updateDataWhenFollow);
   }

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
         <div className="robot-wrapper">
            {robotData.map(robot => (
               <SingleRobotComponent robot={robot} key={robot.id} followRobot={followRobot} />
            ))}
         </div>
    </div>
  );
}

export default App;
