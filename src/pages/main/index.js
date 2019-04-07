import React, { Component } from "react";
import Header from "../../components/header";
import { Container } from "./styles";
import { withRouter, Link } from "react-router-dom";

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Link to='/register'>Cadastrar Usuário </Link>
          <Link to='/products'>Listar Produtos </Link>
          <Link to='/tickets'>Cadastrar Comandas</Link>
        </Container>
      </div>
    );
  }
}

export default withRouter(Main);
