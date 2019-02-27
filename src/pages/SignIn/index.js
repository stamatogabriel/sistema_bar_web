import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './styles.css';
import '../../styles/global.css'
import api from "../../services/api";
import { login } from "../../services/auth";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha usuário e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth", { username, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="username"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>

        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);