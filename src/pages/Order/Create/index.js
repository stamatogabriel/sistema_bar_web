import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Menu from "../../../components/Menu";

class CreateOrder extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    desk: "",
    ticket_id: "",
    numComanda: "",
    order: "",
    inUse: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const ticket = await api.get(`ticket/${id}`);
    const products = await api.get("products");

    this.setState({
      ticket_id: ticket.data.id,
      numComanda: ticket.data.numComanda,
      inUse: ticket.data.inUse,
      products: products.data
    });
  }

  handleCreate = async e => {
    e.preventDefault();

    const { desk, ticket_id } = this.state;

    if (!desk) {
      this.setState({
        error: "Preencha com o número da mesa para continuar"
      });
    }
    if (this.state.inUse === true) {
      alert(
        "Comanda já está sendo utilizada. Por favor, selecione uma nova comanda!"
      );
      this.props.history.push("/tickets");
    } else {
      try {
        const order = await api.post("/order", { desk, ticket_id });
        this.props.history.push(`/edit_orders/${order.data.id}`)
      } catch {
        this.setState({
          error:
            "Algo deu errado. Por favor, verifique os dados e tente novamente."
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Container>
          <Form onSubmit={this.handleCreate}>
            <h1>Pedidos</h1>
            <hr />
            {this.state.error && <p>{this.state.error}</p>}
            <strong>Comanda nº: {this.state.numComanda}</strong>
            <input
              type="number"
              placeholder="Número da mesa"
              onChange={e => this.setState({ desk: e.target.value })}
            />

            <button type='submit'>Fazer Pedido</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(CreateOrder);