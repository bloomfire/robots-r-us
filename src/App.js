import React from 'react';
import data from './data';
import Main from './pages/Main/Main.pages.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main card={data[0]} />
      <h1>Robots-R-Us</h1>
      {/* {data.map(robot => ...)} */}
    </div>
  );
}

export default App;
