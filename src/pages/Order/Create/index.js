import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

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
    products: [],
    order_products: [
      {
        order_id: "",
        product_id: "",
        qnt: ""
      }
    ],
    order: ""
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

    console.log(products);
  }

  handleAddProduct = async (product_id, qnt) => {
    this.setState({
      order_products: [
        ...this.state.order_products,
        { order_id: this.state.order.id, product_id, qnt }
      ]
    })
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
        const data = await api.post("/order", { desk, ticket_id });
        this.setState({ order: data.data });
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

            {this.state.order_products.map((product_id, qnt) => (
              <div>
                <select>
                  {this.state.products.map(product => (
                    <option
                      key={product.id}
                      value={product.id}
                      onChange={e => (product_id = e.target.value)}
                    >
                      {product.description}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Quantidade"
                  onChange={e => (qnt = e.target.value)}
                />
                <button onClick={this.handleAddProduct}>Adicionar Produto</button>
              </div>
            ))}

            <button onChange={() => {}}>Fazer Pedido</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(CreateOrder);

/*<div>
        <select>
          {this.state.products.map(product => (
            <option key={product.id} value={product.id}>
              {product.description}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Número da mesa"
          onChange={e => this.setState({ desk: e.target.value })}
        />
      </div>*/
