import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../../services/api";

import Header from "../../../components/header";
import { Div } from "./styles";

class editProducts extends Component {
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
          <hr />
          <p>
            Preço: R$
            <input type="number" placeholder={product.price} />
          </p>
          <p>
            Quantidade em estoque:
            <input type="number" placeholder={product.stock} />
          </p>
          <p>
            Estoque mínimo: 
            <input type="number" placeholder={product.minStock} />
          </p>
          <button type="submit">Salvar</button>
        </Div>
      </div>
    );
  }
}

export default withRouter(editProducts);
