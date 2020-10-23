import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent} from '@material-ui/core';
import Follow from './Follow'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    width: '50%',
    height: '100%',
    margin: '10px'
  },
  name: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
      <Follow />
      </CardContent>
    </Card>
  );
}
