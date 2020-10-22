import React from 'react';
import data from './data';
import Robots from './Robots'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Robots data={data}/>
    </div>
  );
}

export default App;
