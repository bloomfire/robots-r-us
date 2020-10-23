import React from "react";
import data from "./data";
import Robot from "./Components/Robot";
import "./App.css";
import { Wrapper } from "./CoreStyles";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Wrapper>
        {data.map((robot) => {
          return <Robot robot={robot} />;
        })}
      </Wrapper>
    </div>
  );
}

export default App;
