import React, { Component } from "react";
import Header from "../../components/header";
import { Container } from "./styles";
import { withRouter, Link } from "react-router-dom";

class Main extends Component {
  state = {
    component: ""
  };

  render() {
    return (
      <Container>
        <Header />
        <Link to='/register'>Cadastrar Usuário </Link>
      </Container>
    );
  }
}

export default withRouter(Main);
