import React, { useState } from "react";
import data from "./data";
import "./App.css";

//import components
import Card from "./components/Card";

//import styles and assets
import styled from "styled-components";

function App() {
  const [following, setFollowing] = useState(false);
  return (
    <Wrapper>
      <h1>Robots-R-Us</h1>
      <Grid>
        {data.map((robot) => (
          <div>
            <Card
              key={robot.id}
              avatar={robot.avatar}
              primary={`${robot.first_name} ${robot.last_name}`}
              secondary={robot.title}
              tertiary={robot.email}
              active={following}
              onClick={() => setFollowing(!following)}
              // onClick={() => console.log("clicked", robot.id)}
            ></Card>
          </div>
        ))}
      </Grid>

      {/* {data.map(robot => ...)} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    margin: 1em;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default App;
