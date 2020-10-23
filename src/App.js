import React from 'react';
import data from './data';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FollowButton from './components/FollowButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
}));



function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    robots: data
  })

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {/* {data.map(robot => ...)} */}
      {/* Display raw data first, in a grid */}
      <div className={classes.root}>
        <Grid container spacing={3}>

          {state.robots.map((robot, id) => (
            <Grid key={id} item xs>
              <Paper className={classes.paper}>
                <img src={robot.avatar} alt="robot headshot" />
                <h2>{robot.first_name} {robot.last_name}</h2>
                <FollowButton />
                <h3>{robot.title}</h3>
                <h4>{robot.email}</h4>
              </Paper>
            </Grid>
          ))}


          {/* <Grid item xs={3}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>

            </Paper>

          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}

export default App;
