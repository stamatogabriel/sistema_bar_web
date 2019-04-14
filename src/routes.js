import React from "react";
import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import Main from "./pages/main";
import Register from './pages/Register';
import CreateProduct from './pages/Product/Create';
import ShowProducts from './pages/Product/Show';
import OptionProducts from './pages/Product/Options';
import EditProducts from './pages/Product/Edit';
import CreateTickets from './pages/Ticket/Create';
import ShowTickets from './pages/Ticket/Show';
import CreateOrders from './pages/Order/Create';
import ShowOrders from './pages/Order/Show';
import EditOrders from './pages/Order/Edit';
import Payment from './pages/Order/Payment';

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
        <PrivateRoute path='/create_tickets' component={CreateTickets} />
        <PrivateRoute path='/tickets' component={ShowTickets} />
        <PrivateRoute path='/create_orders/:id' component={CreateOrders} />
        <PrivateRoute path='/orders' component={ShowOrders} />
        <PrivateRoute path='/edit_orders/:id' component={EditOrders} />
        <PrivateRoute path='/payment/:id' component={Payment} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
