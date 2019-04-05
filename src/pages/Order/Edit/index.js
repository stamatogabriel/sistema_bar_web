import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container, Aside } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

class EditOrder extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    order_id: "",
    product_id: "",
    qnt: "",
    order: "",
    products: [],
    ticket: "",
    error: "",
    sucess: "",
    product_orders: []
  };

  handleSelect(e) {
    this.setState({ product_id: e.target.value });
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const order = await api.get(`order/${id}`);
    this.setState({ order: order.data[0] });

    const products = await api.get("products");
    this.setState({ products: products.data });

    const ticket = await api.get(`ticket/${this.state.order.ticket_id}`);
    this.setState({ ticket: ticket.data });

    this.setState({ order_id: id });
  }

  handleSelect = e => {
    e.preventDefault();
    this.setState({ product_id: e.target.value });
  };

  handleAddProduct = async e => {
    e.preventDefault();

    const { order_id, product_id, qnt } = this.state;

    await api.post(`/order/request/${order_id}`, { qnt, order_id, product_id });
    const order = await api.get(`/order/${order_id}`);
    this.setState({ order: order.data[0] });
    this.setState({ product_orders: order.data[0].product_orders });
    console.log(this.state.order);
  };

  showProduct = id => {
    const { products } = this.state;
    const description = products.map(product =>
      product.id === id ? product.description : null
    );
    return description;
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Form>
            <h1>Pedido nº {this.state.order_id}</h1>
            <strong>Comanda nº{this.state.ticket.numComanda}</strong>
            <strong>Mesa {this.state.order.desk}</strong>
            <hr />
            {this.state.error && <p>{this.state.error}</p>}
            <div>
              <select value={this.state.value} onChange={this.handleSelect}>
                <option value="" disabled selected hidden>
                  Escolha o produto
                </option>
                {this.state.products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.description}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantidade"
                onChange={e => this.setState({ qnt: e.target.value })}
              />
              <button type="submit" onClick={this.handleAddProduct}>
                Adicionar Produto
              </button>
            </div>
          </Form>
          <Aside>
            <ul>
              {this.state.product_orders.map(product_order => (
                <div key={product_order.id}>
                  <li>
                    <strong>
                      {this.showProduct(product_order.product_id)}
                    </strong>
                  </li>
                  <li>Quantidade: {product_order.qnt}</li>
                  <li>R$ {product_order.total}</li>
                </div>
              ))}
            </ul>
            <strong>Total da Comanda: {this.state.order.total_comanda}</strong>
          </Aside>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditOrder);
