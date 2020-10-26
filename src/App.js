import React from "react";
import data from "./data";
// components
import Card from "./components/Card";
// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="cards-container">
        {data.map((robot) => (
          <Card key={robot.id} profile={robot} />
        ))}
      </div>
    </div>
  );
}

export default App;
