import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";

import api from "../../../services/api";
import Header from "../../../components/header";
import Menu from "../../../components/Menu";

import { Form, Container } from "./styles";

class CreateProduct extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    description: "",
    price: "",
    stock: "",
    minStock: ""
  };

  async UNSAFE_componentWillMount() {
    const user = await api.get("/get_user");
    this.setState({ user: user.data });

    if (this.state.user.manager !== true) {
      alert("Você não tem autorização para utilizar esta funcionalidade.");
      this.props.history.push("/app");
    }
  }

  parserFloat = priceProduct => {
    const price = parseFloat(priceProduct.replace(",", ".").replace("R$", ""));

    return price;
  };

  handleCreate = async e => {
    e.preventDefault();
    const { description, stock, minStock } = this.state;

    let { price } = this.state;

    if (!description || !price || !stock || !minStock) {
      this.setState({
        error: "Preencha todos os campos para continuar"
      });
    } else {
      price = this.parserFloat(price);

      try {
        await api.post("/products", { description, price, stock, minStock });

        this.setState({
          sucess: "Produto cadastrado com sucesso!"
        });
        alert(this.state.sucess);
      } catch (err) {
        this.setState({
          error: "Algo deu errado. Por favor, tente novamente."
        });
      }
    }
  };

  render() {
    const numberMask = createNumberMask({
      prefix: "R$ ",
      allowDecimal: true,
      thousandsSeparatorSymbol: ".",
      decimalSymbol: ",",
      requireDecimal: true
    });

    return (
      <div>
        <Header />
        <Menu />
        <Container>
          <Form onSubmit={this.handleCreate}>
            <h1>Cadastro de Produto</h1>
            <hr />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="text"
              placeholder="Descrição do Produto"
              onChange={e => this.setState({ description: e.target.value })}
            />
            <MaskedInput
              mask={numberMask}
              placeholder="Preço"
              onChange={e => this.setState({ price: e.target.value })}
            />
            <input
              type="number"
              min={0}
              placeholder="Estoque Inicial"
              onChange={e => this.setState({ stock: e.target.value })}
            />
            <input
              type="number"
              min={0}
              placeholder="Estoque mínimo"
              onChange={e => this.setState({ minStock: e.target.value })}
            />
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(CreateProduct);
