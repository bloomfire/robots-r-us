import React from 'react';
import data from './data';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
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
                <h1>{robot.first_name} {robot.last_name}</h1>
                <button>Follow button placeholder; component this</button>
                <h2>{robot.title}</h2>
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
