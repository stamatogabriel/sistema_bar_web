import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
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
    sucess: ''
  };

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

  handleAddProduct = async (e) => {
    e.preventDefault();

    const { order_id, product_id, qnt } = this.state;

    if (!qnt || !order_id || !product_id){
        alert('Verifique as informações fornecidas e tente de novo.');
}else {
    const order = await api.post(`/order/request/${order_id}`)

    console.log(order);
}
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
              <select>
                {this.state.products.map(product => (
                  <option
                    key={product.id}
                    value={product.id}
                    onChange={e => this.setState({ product_id: e.target.value })}
                  >
                    {product.description}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantidade"
                onChange={e => this.setState({ qnt: e.target.value })}
              />
              <button onClick={this.handleAddProduct}>Adicionar Produto</button>
              <button onClick={() => {}}>Remover Produto</button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditOrder);
