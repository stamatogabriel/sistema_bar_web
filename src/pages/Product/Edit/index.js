import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../../services/api";

import Header from "../../../components/header";
import { Div } from "./styles";

class EditProducts extends Component {
  state = {
    product: {},
    price: '',
    stock: '',
    minStock: '',
    error: '',
    sucess: '',
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`products/${id}`);

    this.setState({ product: response.data });
  }

  handleCancel = async e => {
    const { id } = this.props.match.params;
    this.props.history.push(`/products/${id}`);
  }

  handleEdit = async e => {
    e.preventDefault();

    const { id } = this.props.match.params;

    let { price, stock, minStock } = this.state;
    if ( !price && !stock && !minStock) {
      this.setState({
        error: "Preencha pelo menos um campo para continuar"
      });
    } else {
      try {
        await api.put(`/products/${id}`, { minStock, price, stock });
        this.setState({
          sucess: "Alterações realizadas com sucesso!"
        });
        alert(this.state.sucess);
        this.props.history.push(`/products/${id}`);
      } catch {
        this.setState({
          error: "Algo deu errado. Por favor, tente novamente."
        });
      }
    }
  };

  render() {
    const { product } = this.state;

    return (
      <div>
        <Header />
        <Div>
          <form onSubmit={this.handleEdit}>
        <h1>{product.description}</h1>
        </form>
          <hr />
          {this.state.error && <p className='error'>{this.state.error}</p>}
          <p>
            Preço: R$
            <input type="number" placeholder={product.price} onChange={e => this.setState({ price: e.target.value })}/>
          </p>
          <p>
            Quantidade em estoque:
            <input type="number" placeholder={product.stock} onChange={e => this.setState({ stock: e.target.value })}/>
          </p>
          <p>
            Estoque mínimo: 
            <input type="number" placeholder={product.minStock} onChange={e => this.setState({ minStock: e.target.value })}/>
          </p>
          <button type="submit">Salvar</button>
          <button className="cancelar" onClick={this.handleCancel}>Cancelar</button>
        </Div>
      </div>
    );
  }
}

export default withRouter(EditProducts);
