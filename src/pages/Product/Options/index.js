import React, { Component } from "react";
import { withRouter, a } from "react-router-dom";

import api from "../../../services/api";

import Header from "../../../components/header";
import Menu from "../../../components/Menu";

import { Div } from "./styles";

class OptionProducts extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`products/${id}`);

    this.setState({ product: response.data });
  }

  handleProductDelete = async e => {
    const { id } = this.props.match.params;
    try{
      await api.delete(`products/${id}`);
      alert('Produto deletado com sucesso');
      this.props.history.push("/products");
    }catch{
      alert('Algo deu errado. Tente de novo mais tarde');
    }
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <Header />
        <Menu />
        <Div>
          <h1>{product.description}</h1>
          <hr/>
          <p>Preço: R$ {product.price}</p>
          <p>Quantidade em estoque: {product.stock}</p>
          <p>Estoque mínimo: {product.minStock}</p>
          <a href={`/edit_products/${product.id}`}>Editar Produto</a>
          <button onClick={this.handleProductDelete} className='excluir'>Excluir Produto</button>
        </Div>
      </div>
    );
  }
}

export default withRouter(OptionProducts);
