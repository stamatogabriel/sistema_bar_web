import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

class ShowOrders extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    orders: []
  };

  async componentDidMount() {
    const response = await api.get("order");

    this.setState({ orders: response.data });
    console.log(this.state.orders);
  }

  handleOrderDelete = async id => {
    try {
      await api.delete(`order/${id}`);
      alert("Pedido deletado com sucesso");
      this.componentDidMount();
      this.props.history.push("/orders");
    } catch {
      alert("Algo deu errado. Tente de novo mais tarde");
    }
  };

  handleOrderEdit = async id => {
    try {
      this.props.history.push(`/edit_orders/${id}`);
    } catch {
      alert("Algo deu errado. Tente de novo mais tarde");
    }
  };

  render() {

    return (
      <div>
        <Header />
        <Container>
          <h1>Pedidos</h1>
          {this.state.orders.map(order => (
            <div key={order.id}>
              <article>
                <strong>Pedido nº {order.id}</strong>
                <p>Mesa: {order.desk}</p>
                <p>Estoque atual: </p>
                <p>Tempo de consumo: </p>
              </article>
              <div className="button-containner">
              <button className='edit' onClick={() => this.handleOrderEdit(order.id)}>
                  Editar Ordem
                </button>
                <button className='delete' onClick={() => this.handleOrderDelete(order.id)}>
                  Cancelar Ordem
                </button>
              </div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default withRouter(ShowOrders);
