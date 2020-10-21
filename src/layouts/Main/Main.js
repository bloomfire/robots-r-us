import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  child: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
  },
}));

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant={"h6"}>Robots-R-Us</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.child}>{children}</div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
