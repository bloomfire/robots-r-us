import React, { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    width: "300px",
    margin: "15px auto",
    paddingTop: 10,
    paddingBottom: 10,
  },
  paperTransparent: {
    maxWidth: "90%",
    width: "920px",
    margin: "15px auto",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff0",
  },
  padding: {
    padding: "8px 20px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

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
    <div className="App">
      <CssBaseline>
        <Container className="App-header">
          <h1>ROBOTS-R-US</h1>
        </Container>
        <Container>
          {data.map((robot) => {
            const { id, first_name, last_name, email, title, avatar } = robot;
            return (
              <Grid className="grid-X" key={id}>
                <Grid className="grid-item" xs={12} spacing={3}>
                  <Paper classes={{ root: classes.root }} elevation={1}>
                    <Container align="center">
                      <Avatar className={classes.large} src={avatar} />
                    </Container>
                    <Typography
                      classes={{ root: classes.padding }}
                      variant="h5"
                      gutterBottom
                    >
                      {last_name}, {first_name}
                    </Typography>
                    <Typography variant="body2">{email}</Typography>
                    <Typography variant="body2">{title}</Typography>
                    {isFollowed.includes(true) ? (
                      <Button onClick={(e) => updateFollow(id, "unfollow")}>
                        Unfollow
                      </Button>
                    ) : (
                      <Button onClick={(e) => updateFollow(id, "follow")}>
                        Follow
                      </Button>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            );
          })}
        </Container>
      </CssBaseline>
    </div>
  );
}
