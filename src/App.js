import React from "react";
import data from "./data";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Container>
        {data.map((robot) => {
          const { id, first_name, last_name, email, title, avatar } = robot;
          return (
            <Grid>
              <Grid>
                <CardContent>
                  <dl>
                    <Avatar src={avatar} />
                    <dt>{first_name}</dt>
                    <dt>{last_name}</dt>
                    <dt>{email}</dt>
                    <dt>{title}</dt>
                  </dl>
                  <Button>Button</Button>
                </CardContent>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
