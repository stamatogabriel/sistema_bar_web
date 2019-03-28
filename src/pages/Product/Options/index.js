import React, { Component } from "react";
import { withRouter, a } from "react-router-dom";

import api from "../../../services/api";

import Header from "../../../components/header";
import { Div } from "./styles";

class optionProducts extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <Header />
        <Div>
          <h1>{product.description}</h1>
          <hr/>
          <p>Preço: R$ {product.price}</p>
          <p>Quantidade em estoque: {product.stock}</p>
          <p>Estoque mínimo: {product.minStock}</p>
          <a href={`/edit_products/${product.id}`}>Editar Produto</a>
          <a href='#' className='excluir'>Excluir Produto</a>
        </Div>
      </div>
    );
  }
}

export default withRouter(optionProducts);
