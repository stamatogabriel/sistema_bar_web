import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';

import api from "../../../services/api";

import Header from "../../../components/header";
import Menu from "../../../components/Menu";

import { Div } from "./styles";

class EditProducts extends Component {
  state = {
    product: {},
    response: {},
    error: "",
    sucess: "",
    price: ""
  };

  async UNSAFE_componentWillMount() {
    const user = await api.get("/get_user");
    this.setState({ user: user.data });

    if (this.state.user.manager !== true) {
      alert("Você não tem autorização para utilizar esta funcionalidade.");
      this.props.history.push("/app");
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`products/${id}`);
    this.setState({ response: response.data });

    this.parserMoney();
  }

  handleCancel = async e => {
    const { id } = this.props.match.params;
    this.props.history.push(`/products/${id}`);
  };

  handleEdit = async e => {
    e.preventDefault();

    const { id } = this.props.match.params;

    const { stock, minStock } = this.state.product;
    let { price } = this.state.product;
    if (!price && !stock && !minStock) {
      this.setState({
        error: "Preencha pelo menos um campo para continuar"
      });
    } else {
      price = this.parserFloat(price);
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

  parserMoney = () => {
    let price = this.state.response.price.toFixed(2);
    price = price.toString().replace(".", ",");
    this.setState({ price });
  };

  parserFloat = (priceProduct) => {
    const price = parseFloat(priceProduct
                                  .replace(',', '.')
                                  .replace('R$', '')
                                  );
    
    return price;
  };

  render() {

    const numberMask = createNumberMask({
      prefix: 'R$ ',
      allowDecimal: true,
      thousandsSeparatorSymbol: '.',
      decimalSymbol: ',',
      requireDecimal: true
    });

    return (
      <div>
        <Header />
        <Menu />
        <Div>
          <form onSubmit={this.handleEdit}>
            <h1>{this.state.response.description}</h1>
          </form>
          <hr />
          {this.state.error && <p className="error">{this.state.error}</p>}
          <p>
            Preço: R$
            <MaskedInput
              mask={numberMask}
              type="text"
              placeholder={this.state.price}
              onChange={e =>
                this.setState({ product: { price: e.target.value } })
              }
            />
          </p>
          <p>
            Quantidade em estoque:
            <input
              type="number"
              placeholder={this.state.response.stock}
              onChange={e =>
                this.setState({ product: { stock: e.target.value } })
              }
            />
          </p>
          <p>
            Estoque mínimo:
            <input
              type="number"
              placeholder={this.state.response.minStock}
              onChange={e =>
                this.setState({ product: { minStock: e.target.value } })
              }
            />
          </p>
          <button type="submit" onClick={this.handleEdit}>
            Salvar
          </button>
          <button className="cancelar" onClick={this.handleCancel}>
            Cancelar
          </button>
        </Div>
      </div>
    );
  }
}

export default withRouter(EditProducts);
