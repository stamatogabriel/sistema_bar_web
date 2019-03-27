import React, { Component } from "react";
import api from "../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../components/header";


class Register extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    manager: "",
    error: "",
    sucess: ""
  };

  handleRegister = async e => {
    e.preventDefault();
    const { username, password, confirmPassword, manager } = this.state;
    if (!username || !password) {
      this.setState({
        error: "Preencha todos os campos para cadastro do funcionário"
      });
    }
    if (confirmPassword !== password){
      this.setState({
        error: "Senhas digitadas não são iguais. Por favor, tente novamente."
      });
    } else {
      try {
        await api.post("/register", { username, password, manager });
        this.setState({
          sucess: "Funcionário cadastrado com sucesso!"
        });
        alert(this.state.sucess);
      } catch {
        this.setState({
          error: "Algo deu errado. Por favor, tente novamente."
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Form onSubmit={this.handleRegister}>
            <h1>Cadastro de Usuário</h1>
            <hr />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
                        <input
              type="password"
              placeholder="Confirme sua senha"
              onChange={e => this.setState({ confirmPassword: e.target.value })}
            />
            <div>
              <input
                className="manager"
                id="manager"
                type="checkbox"
                value={true}
                onChange={e => this.setState({ manager: e.target.value })}
              />
              <label id='label' for="manager">Gerente?</label>
            </div>
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Register);
