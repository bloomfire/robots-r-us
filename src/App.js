import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import EmployeeDirectory from "./views/EmployeeDirectory";
import MainLayout from "./layouts/Main";

import "./App.css";

/*
  Wrap app in a BrowserRouter to enable the use of a Switch
  which in turn enables the use of Route and Redirect components
  to force the user to the /employee-directory route.

  CssBaseline does a clean reset of default CSS.
*/

const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route
            exact={true}
            path="/employee-directory"
            component={EmployeeDirectory}
          />
          <Redirect to={"/employee-directory"} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
