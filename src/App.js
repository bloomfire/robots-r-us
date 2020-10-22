import data from './data';
import React from 'react';
import Robot from './robot';
import { sortBy } from 'lodash';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {sortBy(data, ['last_name']).map(robot =>
        <Robot {...robot} />
        )}
      </div>
    </div>
  );
}

export default App;
