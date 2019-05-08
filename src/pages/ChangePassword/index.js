import React, { Component } from "react";
import api from "../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../components/header";
import Menu from "../../components/Menu";

class Register extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    user: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
    error: "",
    sucess: ""
  };

  async componentDidMount() {
    const user = await api.get("/get_user");
    this.setState({ user: user.data });

    console.log(this.state.user);
  }

  handleChange = async e => {
    e.preventDefault();
    const { password, newPassword, confirmNewPassword } = this.state;

    if (!newPassword || !password || !confirmNewPassword) {
      this.setState({
        error: "Preencha todos os campos para alterar sua senha"
      });
    }

    if (confirmNewPassword !== newPassword) {
      this.setState({
        error: "Senhas digitadas não são iguais. Por favor, tente novamente."
      });
    }

    if (password === newPassword || password === confirmNewPassword) {
      this.setState({
        error: "A nova senha deve ser diferente da senha atual"
      });

    } else {
      try {
        await api.put("/change_password", { newPassword, password });
        this.setState({
          sucess: "Senha alterada com sucesso!"
        });
        alert(this.state.sucess);
        this.props.history.push('/app');
      } catch (err) {
        this.setState({
          error: "Algo deu errado. Por favor, tente novamente."
        });
        console.log(err)
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Container>
          <Form onSubmit={this.handleChange}>
            <h1>Alteração de Senha</h1>
            <hr />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="password"
              placeholder="Digite sua senha atual"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <strong />
            <input
              type="password"
              placeholder="Digite sua nova senha"
              onChange={e => this.setState({ newPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirme sua nova senha"
              onChange={e =>
                this.setState({ confirmNewPassword: e.target.value })
              }
            />
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Register);
