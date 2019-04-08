import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import { Div } from "./styles";

import api from "../../../services/api";

class EditProductsOrder extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    productOrder: "",
    product: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const productOrder = await api.get(`request/${id}`);
    this.setState({ productOrder: productOrder.data });

    const product = await api.get(
      `products/${this.state.productOrder.product_id}`
    );
    this.setState({ product: product.data });
  }

  handleEdit = async e => {
    e.preventDefault();

    const { id } = this.props.match.params;

    const { qnt } = this.state.productOrder;
    if ( !qnt) {
      this.setState({
        error: "Preencha a quantidade para continuar"
      });
    } else {
      try {
        await api.put(`/request/${id}`, { qnt });
        this.setState({
          sucess: "Alterações realizadas com sucesso!"
        });
        alert(this.state.sucess);
        this.props.history.push(`/edit_orders/${this.state.productOrder.order_id}`);
      } catch {
        this.setState({
          error: "Algo deu errado. Por favor, tente novamente."
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Div>
          <form onSubmit={this.handleEdit}>
            <h1>{this.state.product.description}</h1>
          </form>
          <hr />
          {this.state.error && <p className="error">{this.state.error}</p>}
          <p>
            Quantidade:
            <input
              type="number"
              placeholder={this.state.productOrder.qnt}
              onChange={e =>
                this.setState({ productOrder: { qnt: e.target.value } })
              }
            />
          </p>
          <button type="submit" onClick={this.handleEdit}>
            Salvar
          </button>
          <button className="cancelar" onClick={() => {this.props.history.push(`/edit_orders/${this.state.productOrder.order_id}`)}}>
            Cancelar
          </button>
        </Div>
      </div>
    );
  }
}

export default withRouter(EditProductsOrder);
