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
        order_products: [
            {
                order_id: "",
                product_id: "",
                qnt: ""
            }
        ],
        order: '',
        products: [],
        ticket: '',
        error: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const order = await api.get(`order/${id}`);
        this.setState({ order: order.data[0] });

        const products = await api.get('products');
        this.setState({ products: products.data });

        const ticket = await api.get(`ticket/${this.state.order.ticket_id}`);
        this.setState({ ticket: ticket.data });
    }

    handleAddProduct = async (e, product_id, qnt) => {
        e.preventDefault()
        this.setState({
            order_products: [
                ...this.state.order_products,
                { order_id: this.state.order.id, product_id, qnt }
            ]
        })
        console.log(this.state.order_products)
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Form>
                        <h1>Pedido nº {this.state.order.id}</h1>
                        <strong>Comanda nº{this.state.ticket.numComanda}</strong>
                        <strong>Mesa {this.state.order.desk}</strong>
                        <hr />
                        {this.state.error && <p>{this.state.error}</p>}
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
                                <button onClick={() => { }}>Remover Produto</button>
                            </div>
                        ))}
                        <button onClick={this.handleAddProduct}>Adicionar Produto</button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(EditOrder)