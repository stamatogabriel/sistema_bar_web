import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

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

    parserFloat = (priceProduct) => {
    const price = parseFloat(priceProduct.replace(',', '.'));
    
    return price;
  }

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
        const product = await api.post("/products", { description, price, stock, minStock });

        this.setState({
          sucess: "Produto cadastrado com sucesso!",
        });
        console.log(product)
        alert(this.state.sucess);
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
            <input
              type="text"
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
