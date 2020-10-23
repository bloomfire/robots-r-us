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

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {/* {data.map(robot => ...)} */}
      {/* Display raw data first, in a grid */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
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

          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
