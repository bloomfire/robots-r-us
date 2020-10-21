import React, { useState } from "react";
import data from "./data";
import "./App.css";

//import components
import Card from "./components/Card";

//import styles and assets
import styled from "styled-components";

function App() {
  const [following, setFollowing] = useState({});

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Wrapper>
      <h1>Robots-R-Us</h1>
      <Grid>
        {data.map((robot) => (
          <div key={robot.id}>
            <Card
              id={robot.id}
              avatar={robot.avatar}
              primary={`${robot.first_name} ${robot.last_name}`}
              secondary={robot.title}
              tertiary={robot.email}
              active={following.id}
              onClick={() => handleClick()}
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

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default App;
