import React, {useState, useEffect} from 'react';
import SingleRobotComponent from './components/SingleRobotComponent';
import {updateRobotData} from './helperFunctions/helperFunctions';
import data from './data';


function App() {
   const [robotData, setRobotData] = useState(data);

   useEffect(() => {
      setRobotData(updateRobotData);
      
   },[]);

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
         <div className="robot-wrapper">
            {robotData.map(robot => (
               <SingleRobotComponent robot={robot} key={robot.id} />
            ))}
         </div>
    </div>
  );
}

export default App;
