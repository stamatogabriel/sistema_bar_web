import React, { Fragment } from "react";
import { isAuthenticated } from "./services/auth";
import { ModalContainer } from "react-router-modal";

import SignIn from "./pages/SignIn";
import Main from "./pages/main";
import Register from './pages/Register';
import createProduct from './pages/Product/Create';
import showProducts from './pages/Product/Show'

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
        <PrivateRoute path='/register' component={Register} />
        <PrivateRoute path='/products/create' component={createProduct} />
        <PrivateRoute path='/products' component={showProducts} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
