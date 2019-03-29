import React from "react";
import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import Main from "./pages/main";
import Register from './pages/Register';
import CreateProduct from './pages/Product/Create';
import ShowProducts from './pages/Product/Show';
import OptionProducts from './pages/Product/Options';
import EditProducts from './pages/Product/Edit';

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
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute path="/app" component={Main} />
        <PrivateRoute path='/register' component={Register} />
        <PrivateRoute path='/edit_products/:id' component={EditProducts} />
        <PrivateRoute path='/create_products' component={CreateProduct} />
        <PrivateRoute path='/products/:id' component={OptionProducts} />
        <PrivateRoute path='/products' component={ShowProducts} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
