import React, {useState, useEffect} from 'react';
import data from './data';
import styled from 'styled-components';
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

  const showAll = () => {
    setDisplayData(allData)
  }
  const showFollowing = () => {
    setDisplayData(displayData.filter(d => d.following))
  }
  const toggleFollow = employeeId => {
    console.log('pressed follow button for', employeeId)
    setAllData(allData.map(d => {
      if (d.id === employeeId)
      { 
        return {...d, following: !d.following}
      } else {
        return d
      }
    }))
    setDisplayData(allData.map(d => {
      if (d.id === employeeId)
      { 
        return {...d, following: !d.following}
      } else {
        return d
      }
    }))
  }
  useEffect(() => {
    console.log('data updated', allData)
  }, [allData])
  useEffect(() => {
    console.log('display data updated', displayData)
  }, [displayData])

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <ShowButtons className='show-button-container'>
        <ShowAll className='show-all-btn' onClick={showAll}>Show All</ShowAll>
        <ShowFollowing className='show-following-btn' onClick={showFollowing}>Show Following</ShowFollowing>
      </ShowButtons>
      <Directory data={displayData} toggleFollow={toggleFollow}/>
    </div>
  );
}

const ShowButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding: auto;
  margin: auto;
  width: 80%;
  justify-content: center;
  @media(max-width: 500px){
    flex-direction: column;
    width: 60%;
  }
`
const ShowAll = styled.button`
  margin: 2%;
  padding: 2%;
  font-size: 1.1rem;
  background: lightgray;
  color: midnightblue;
`
const ShowFollowing = styled.button`
  margin: 2%;
  padding: 2%;
  font-size: 1.1rem;
  background: green;
  color: white;
`
export default App;
