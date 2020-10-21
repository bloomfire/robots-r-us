import React, {useState, useEffect} from 'react';
import SingleRobotComponent from './components/SingleRobotComponent';
import {updateRobotData} from './helperFunctions/helperFunctions';
import data from './data';


function App() {
   const [robotData, setRobotData] = useState(data);

   useEffect(() => {
      setRobotData(updateRobotData);
      
   },[]);


   const followRobot = robot => {
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
