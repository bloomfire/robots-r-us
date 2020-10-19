import React from 'react';
import data from './data';
import './App.css';
import Directory from './components/Directory';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {/* {data.map(robot => ...)} */}
      <Directory />
    </div>
  );
}

export default App;
