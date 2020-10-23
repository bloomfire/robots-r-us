import React, { useState } from "react";
import data from "./data";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    width: "920px",
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

function App() {
  const classes = useStyles();
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
      <CssBaseline>
        <h1>Robots-R-Us</h1>
        <Container>
          {data.map((robot) => {
            const { id, first_name, last_name, email, title, avatar } = robot;
            return (
              <Grid container spacing={1} key={id}>
                <Grid item xs>
                  <Paper classes={{ root: classes.root }} elevation={1}>
                    <CardContent>
                      <Avatar className={classes.large} src={avatar} />
                      <Typography
                        classes={{ root: classes.padding }}
                        variant="h5"
                        gutterBottom
                      >
                        {last_name}, {first_name}
                      </Typography>
                      <Typography></Typography>
                      <Typography>{email}</Typography>
                      <Typography>{title}</Typography>
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

export default App;
