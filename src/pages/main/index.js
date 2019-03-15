import React, { Component } from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import { ModalRoute } from "react-router-modal";
import { withRouter } from "react-router-dom";

import Register from "../Register";

class Main extends Component {
  state = {
    component: ""
  };

  

  handleShowRegister = () => {
    return ;
  };

  renderButtonAdd() {
    return (
          <div>
            <button onClick={this.handleShowRegister} type="button">
              Adicionar
            </button>
            <button
              onClick={() => this.setState({ addActivate: false })}
              className="cancel"
            >
              Cancelar
            </button>
          </div>
      );
  }

  render() {
    return (
      <Container>
        <Header />
        {this.renderButtonAdd()}
        <ModalRoute 

          component={this.state.component} />
      </Container>
    );
  }
}

export default withRouter(Main);
