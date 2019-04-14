import React, { Component } from "react";
import Header from "../../components/header";
import { Container } from "./styles";
import { withRouter, Link } from "react-router-dom";
import {} from 'react-icons/'

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          <div className='button-containner'>
          <Link to='/register'>Cadastrar Usuário </Link>
          <Link to='/products'>Listar Produtos </Link>
          </div>
          <div className='button-containner'>
          <Link to='/tickets'>Listar Comandas</Link>
          <Link to='/orders'>Ordens</Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Main);
