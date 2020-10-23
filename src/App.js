import React, { useState } from "react";
import data from "./data";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function App() {
  const [follow, setFollow] = useState(data);

  const updateFollow = (id, status) => {
    let statusObject = { ...follow };
    statusObject[id] = {
      status: status,
    };
    setFollow(statusObject);
  };

  const isFollowed = Object.keys(follow).map(
    (key) => follow[key].status === "follow"
  );

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <Container>
        {data.map((robot) => {
          const { id, first_name, last_name, email, title, avatar } = robot;
          return (
            <Grid>
              <Grid>
                <Card>
                  <CardContent>
                    <dl>
                      <Avatar src={avatar} />
                      <dt>{first_name}</dt>
                      <dt>{last_name}</dt>
                      <dt>{email}</dt>
                      <dt>{title}</dt>
                    </dl>
                    {isFollowed.includes(true) ? (
                      <Button onClick={(e) => updateFollow(id, "unfollow")}>
                        Unfollow
                      </Button>
                    ) : (
                      <Button onClick={(e) => updateFollow(id, "follow")}>
                        Follow
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
