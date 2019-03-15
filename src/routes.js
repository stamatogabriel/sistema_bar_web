import React, { Fragment } from "react";
import { isAuthenticated } from "./services/auth";
import { ModalContainer } from "react-router-modal";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "react-router-modal/css/react-router-modal.css";

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
    <Fragment>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute path="/app" component={Main} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
