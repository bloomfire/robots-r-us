import React from 'react';
import { CardColumns } from 'react-bootstrap';
import './App.css';
import Profile from "./components/profile"
import data from "./data";

function App() {
return (
    <div className="App">
      <h1 className="title-center">Robots-R-Us</h1>
        {data.map((profile, key) =>{
          return <Profile profile = {profile} id = {key}/>
        })}
    </div>
  );
}

export default App;
