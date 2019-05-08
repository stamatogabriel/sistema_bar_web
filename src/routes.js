import React from "react";

import { isAuthenticated } from "./services/auth";
import api from "./services/api";

import SignIn from "./pages/SignIn";
import Main from "./pages/main";
import Register from "./pages/Register";
import ChangePassword from "./pages/ChangePassword";
import CreateProduct from "./pages/Product/Create";
import ShowProducts from "./pages/Product/Show";
import OptionProducts from "./pages/Product/Options";
import EditProducts from "./pages/Product/Edit";
import CreateTickets from "./pages/Ticket/Create";
import ShowTickets from "./pages/Ticket/Show";
import CreateOrders from "./pages/Order/Create";
import ShowOrders from "./pages/Order/Show";
import EditOrders from "./pages/Order/Edit";
import Payment from "./pages/Order/Payment";
import QrCode from "./pages/Order/QrCode";
import ShowCustomer from "./pages/Order/ShowCustomer";

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
      <Route path="/comanda/:id" component={ShowCustomer} />

      <PrivateRoute path="/app" component={Main} />
      <PrivateRoute path="/tickets" component={ShowTickets} />
      <PrivateRoute path="/change_password" component={ChangePassword} />
      <PrivateRoute path="/create_orders/:id" component={CreateOrders} />
      <PrivateRoute path="/edit_orders/:id" component={EditOrders} />
      <PrivateRoute path="/orders" component={ShowOrders} />
      <PrivateRoute path="/payment/:id" component={Payment} />
      <PrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/products" component={ShowProducts} />
      <PrivateRoute path="/products/:id" component={OptionProducts} />
      <PrivateRoute path="/create_products" component={CreateProduct} />
      <PrivateRoute path="/edit_products/:id" component={EditProducts} />
      <PrivateRoute path="/create_tickets" component={CreateTickets} />
      <PrivateRoute path="/qrcode/:id" component={QrCode} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
