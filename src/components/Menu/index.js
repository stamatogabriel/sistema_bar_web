import React, { Component } from "react";
import { Sidenav } from "./styles";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <Sidenav>
        <Link to="#about">About</Link>
        <Link to="#services">Services</Link>
        <Link to="#clients">Clients</Link>
        <Link to="#contact">Contact</Link>
      </Sidenav>
    );
  }
}

export default Menu;
