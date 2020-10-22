import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import data from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 150,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const [following, setFollowing] = React.useState(false);
  const classes = useStyles();
  let buttonColor = "gray";

  const followUser = () => {
    setFollowing(following ? true : false);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {data.map((robot) => (
            <Grid item key={robot.id}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="robot avatar"
                        src={robot.avatar}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container alignItems="center" justify="center">
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {robot.first_name} {robot.last_name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {robot.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {robot.title}
                        </Typography>
                        <Grid item>
                          <Typography
                            variant="body2"
                            style={{
                              cursor: "pointer",
                              backgroundColor: buttonColor,
                            }}
                            handleClick={(following) =>
                              following
                                ? (buttonColor = "green")
                                : (buttonColor = "gray")
                            }
                          >
                            {following}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
