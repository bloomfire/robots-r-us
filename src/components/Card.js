import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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

const Card = (props) => {
  const classes = useStyles();
  const { firstName, lastName, avatar, email, title, id, following } = props;

  const [follow, setFollow] = useState(following);

  const followUser = () => {
    follow ? setFollow(false) : setFollow(true);
  };

  return (
    <Grid item key={id}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="robot avatar" src={avatar} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container justify="center">
            <Grid item sm container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {firstName} {lastName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    cursor: "pointer",
                    backgroundColor: follow ? "green" : "gray",
                  }}
                  onClick={() => followUser(following)}
                >
                  {follow ? "following" : "follow"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
