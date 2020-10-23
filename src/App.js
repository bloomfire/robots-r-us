import React from "react";
import data from "./data";
import "./App.css";
import "react-toggle/style.css";
import Toggle from "react-toggle";

import EmployeeItem from "./EmployeeItem";

function App() {
  return (
    <body>
      <h1>Robots-R-Us</h1>
      <div className="sort-row">
        <h3 className="sort">Sort by Last Name</h3>
        <Toggle defaultChecked={true} />
      </div>
      <div className="App">
        {data.map(robot => (
          <EmployeeItem key={robot.id} data={robot} />
        ))}
      </div>
    </body>
  );
}

export default App;
