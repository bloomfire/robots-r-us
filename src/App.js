import React, {useState, useEffect} from 'react';
import data from './data';
import './App.css';
import Directory from './components/Directory';

// sorting function to sort employee data by last name
const sortByLastName = (d1,d2) => {
  if (d1.last_name > d2.last_name){
    return 1
  } else if (d1.last_name < d2.last_name){
    return -1
  } else {
    return 0
  }
}
// sort data by last name
data.sort(sortByLastName)

function App() {
  // state variables for all data and display data
  // allData variable will have a following property for each employee to track the following status
  const [allData, setAllData] = useState(data.map(d => {
    return {
      ...d,
      following: false
    }
  }))
  const [displayData, setDisplayData] = useState(allData)
  
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {/* {data.map(robot => ...)} */}
      <Directory />
    </div>
  );
}

export default App;
