import React, { Component } from "react";
import Header from "../../components/header";
import { Container } from "./styles";
import { withRouter } from "react-router-dom";
import Menu from "../../components/Menu";

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Container>
            <h2>Seja bem vindo</h2>
            <p>Utilize o menu lateral para navegação nas funcionalidades do sistema.</p>          
        </Container>
      </div>
    );
  }
}

export default withRouter(Main);
