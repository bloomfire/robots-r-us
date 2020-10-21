import React from "react";
import data from "./data";
import "./App.css";

//import components
import Card from "./components/Card";

//import styles and assets
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Grid>
        {/* {data.map((robot) => (
          <div>
            <Card
              key={robot.id}
              avatar={robot.avatar}
              primary={robot.first_name}
              secondary={robot.title}
              tertiary={robot.email}
            ></Card>
          </div>
        ))} */}
      </Grid>

      {/* {data.map(robot => ...)} */}
    </div>
  );
}

const Grid = styled.div``;

export default App;
