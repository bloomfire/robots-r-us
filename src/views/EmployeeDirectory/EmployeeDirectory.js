import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/styles";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { EmployeeCard } from "./components";
import EMPLOYEE_DIRECTORY from "../../data";

const EMPLOYEES_FOLLOWED_COOKIE_NAME = "EMPLOYEES_FOLLOWED";

// Simple CSS in JS.
const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    overflow: "auto",
    padding: 24,
  },
  loadingContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// Mocking an asynchronous API call.
const callAPI = () =>
  new Promise((resolve) =>
    resolve({
      employee_directory: EMPLOYEE_DIRECTORY,
      employees_followed: Cookies.getJSON(EMPLOYEES_FOLLOWED_COOKIE_NAME) || {},
    })
  );

/*
    Initally, show loading animation. After mount, load in
    state from provided data/cookies and render cards. Pass down 
    follow state callbacks as props to the cards, which after mutating state
    will trigger an update to a client side cookie so that it
    always mirrors state.
*/

const EmployeeDirectory = () => {
  const [fetching, setFetching] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [employeesFollowed, setEmployeesFollowed] = useState({});

  const classes = useStyles();

  useEffect(() => {
    callAPI()
      .then(({ employee_directory, employees_followed }) => {
        setEmployees(employee_directory);
        setEmployeesFollowed(employees_followed);
        setTimeout(() => setFetching(false), 1000);
      })
      .catch(() => alert("Oops!"));
  }, []);

  useEffect(() => {
    if (!fetching) {
      Cookies.set(
        EMPLOYEES_FOLLOWED_COOKIE_NAME,
        JSON.stringify(employeesFollowed)
      );
    }
    // eslint-disable-next-line
  }, [employeesFollowed]);

  //
  const handleFollowEmployee = useCallback((employeeId) => {
    setEmployeesFollowed((prev) => {
      const updated = { ...prev };
      updated[employeeId] = true;
      return updated;
    });
  }, []);
  const handleUnfollowEmployee = useCallback((employeeId) => {
    setEmployeesFollowed((prev) => {
      const updated = { ...prev };
      delete updated[employeeId];
      return updated;
    });
  }, []);

  // Show loading animation until fetch over.
  if (fetching) {
    return (
      <Container className={classes.loadingContainer} maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {employees.map(
          ({ id, first_name, last_name, title, email, avatar }, i) => {
            return (
              <Grid key={id} item xs={12} md={6} lg={3}>
                <EmployeeCard
                  id={id}
                  fadeDelay={i * 30}
                  name={`${first_name}${last_name || ""}`}
                  title={title}
                  email={email}
                  avatar={avatar}
                  following={`${id}` in employeesFollowed}
                  onFollow={() => handleFollowEmployee(id)}
                  onUnfollow={() => handleUnfollowEmployee(id)}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </div>
  );
};

export default EmployeeDirectory;
