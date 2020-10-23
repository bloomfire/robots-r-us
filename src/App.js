import React, { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

export default function App() {
  const [followed, setFollowed] = useState();
  useEffect(() => {
    if (!followed) {
      data.forEach((i) => (i.follow = false));
      setFollowed(data);
    }
  }, [followed]);
  const updateFollowed = (index, status) => {
    const newState = [...followed];
    newState[index].follow = status;
    setFollowed(newState);
  };

  return (
    <CssBaseline>
      <Container className="App">
        <h1 className="App-header">Robots-R-Us</h1>
        <Grid container spacing={3}>
          {data.map((robot, index) => {
            const {
              id,
              first_name,
              last_name,
              email,
              follow,
              title,
              avatar,
            } = robot;
            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card raised style={{ justifyContent: "center" }}>
                  <Container>
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="avatar"
                          src={avatar}
                          style={{
                            height: 100,
                            width: 100,
                            backgroundColor: "#efa032",
                          }}
                        />
                      }
                    />
                  </Container>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {last_name}, {first_name}
                    </Typography>
                    <Typography variant="body2">
                      {email ? email : "No Email Found"}
                    </Typography>
                    <Typography variant="body2">
                      {title ? title : "No Title Found"}
                    </Typography>
                    {follow ? (
                      <Button
                        size="small"
                        variant="contained"
                        style={{
                          backgroundColor: follow ? "#6BBF98" : "white",
                          color: follow ? "#F2F1F0" : "black",
                        }}
                        onClick={() => updateFollowed(index, false)}
                      >
                        Following
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => updateFollowed(index, true)}
                      >
                        Follow
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </CssBaseline>
  );
}
