import React, { Component } from "react";
import { withRouter, a } from "react-router-dom";

import api from "../../../services/api";

import Header from "../../../components/header";
import Menu from "../../../components/Menu";

import { Div } from "./styles";

class OptionProducts extends Component {
  state = {
    product: {},
    price: '',
  };

  async UNSAFE_componentWillMount(){
    const user = await api.get("/get_user");
    this.setState({ user: user.data });

    if (this.state.user.manager !== true){
        alert("Você não tem autorização para utilizar esta funcionalidade.")
        this.props.history.push('/app')
    }
};

  async componentDidMount() {
    const { id } = this.props.match.params;
    
    const response = await api.get(`products/${id}`);
    this.setState({ product: response.data });

    this.parserMoney();
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

  parserMoney = () => {
    let price = this.state.product.price.toFixed(2);
    price = price.toString().replace(".", ",");
    this.setState({ price });
  };

  render() {
    const { product } = this.state;

    return (
      <div>
        <Header />
        <Menu />
        <Div>
          <h1>{product.description}</h1>
          <hr/>
          <p>Preço: R$ {this.state.price}</p>
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
