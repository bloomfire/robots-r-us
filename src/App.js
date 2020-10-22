import React, { useState } from "react";
import RobotCardGrid from "./components/robot/RobotCardGrid";
import styled from "styled-components";
import initialData from "./data.js";
import "./App.css";

const SortButton = styled.button`
  padding: 6px;
  margin: 4px;
`;

function App() {
  const [data, setData] = useState(initialData);

  const sortByLastName = () => {
    let newData = [...data].sort((a, b) =>
      a.last_name.localeCompare(b.last_name)
    );
    setData(newData);
  };

  const sortByFirstName = () => {
    let newData = [...data].sort((a, b) =>
      a.first_name.localeCompare(b.first_name)
    );
    setData(newData);
  };

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <SortButton onClick={() => sortByLastName()}>
        Sort By Last Name
      </SortButton>
      <SortButton onClick={() => sortByFirstName()}>
        Sort By First Name
      </SortButton>
      <RobotCardGrid data={data} />
    </div>
  );
}

export default App;
