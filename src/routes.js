import React from "react";
import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import Main from "./pages/main";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute path="/app" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
